// Copyright (c) 2022. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import path from "path";

import {
    CORE_PACKAGE_GIT_BRANCH,
    CORE_PACKAGE_GIT_PATH, CORE_PACKAGE_GIT_URL,
    DEFAULT_EXECA_STDIO, DEFAULT_GIT_ORGANIZATION,
    DEFAULT_INSTALLED_PACKAGES,
    DEFAULT_LOG_LEVEL, DEFAULT_ORGANIZATION_EMAIL, DEFAULT_ORGANIZATION_NAME,
    PREFERED_PACKAGE_SYSTEM
} from "./constants/runtime";

import { LogService } from "./fi/hg/core/LogService";
import { parseLogLevel } from "./fi/hg/core/types/LogLevel";
import { SyncFileUtils } from "./fi/hg/core/SyncFileUtils";
import { InstallConfig } from "pkg-install/lib/config";
import { getPackageManager, install, SupportedPackageManagers } from "pkg-install";
import { initPackage } from "./initPackage";
import { camelCase } from "lodash";
import { GitUtils } from "./GitUtils";
import { isReadonlyJsonObject } from "./fi/hg/core/Json";
import { isEqual } from "./fi/hg/core/modules/lodash";

const LOG = LogService.createLogger('main');

const logLevel = parseLogLevel(DEFAULT_LOG_LEVEL);
if (logLevel) {
    LOG.debug(`Setting log level as `, logLevel);
    LogService.setLogLevel( logLevel );
}

export async function main () : Promise<void> {

    let cwd : string = process.cwd();

    const dirname = process.argv.slice(2).filter((arg : string) => !arg.startsWith("-")).shift();
    if (dirname) {
        const newCwd = path.resolve(cwd, dirname);
        LOG.debug(`Creating project directory: `, newCwd);
        SyncFileUtils.mkdirp(newCwd);
        process.chdir(newCwd);
        cwd = newCwd;
    }

    const installConfig : InstallConfig = {
        dev: false,
        exact: false,
        noSave: false,
        bundle: false,
        verbose: false,
        global: false,
        prefer: PREFERED_PACKAGE_SYSTEM,
        stdio: DEFAULT_EXECA_STDIO,
        cwd: cwd
    };

    LOG.debug(`Initial install config: `, installConfig);
    const pkgManager : SupportedPackageManagers = await getPackageManager(installConfig);

    LOG.debug(`Initializing package.json using `, pkgManager);
    await initPackage(pkgManager);

    const packageJsonPath = path.resolve("package.json");
    if ( !SyncFileUtils.fileExists(packageJsonPath) ) {
        LOG.warn(`Warning! package.json did not exist: `, packageJsonPath);
        return;
    }

    const pkgDir = path.dirname(packageJsonPath);
    const templatesDir = path.resolve(__dirname, "../templates");
    const mainName = path.basename(pkgDir);
    const srcDir = path.resolve(pkgDir, './src');
    const srcConstantsDir = path.resolve(srcDir, './constants');
    const srcControllersDir = path.resolve(srcDir, './controllers');

    LOG.debug(`Creating directory: `, srcConstantsDir);
    SyncFileUtils.mkdirp(srcConstantsDir);

    LOG.debug(`Creating directory: `, srcControllersDir);
    SyncFileUtils.mkdirp(srcControllersDir);

    const currentYear = (new Date().getFullYear());

    const replacements = {
        'GIT-ORGANISATION' : DEFAULT_GIT_ORGANIZATION,
        'ORGANISATION-NAME' : DEFAULT_ORGANIZATION_NAME,
        'ORGANISATION-EMAIL' : DEFAULT_ORGANIZATION_EMAIL,
        'CURRENT-YEAR' : `${currentYear}`,
        'PROJECT-NAME' : mainName,
        'projectName' : camelCase(mainName)
    };

    LOG.debug(`Initializing git if necessary`);
    await GitUtils.initGit();

    SyncFileUtils.copyTextFileWithReplacementsIfMissing(path.resolve(templatesDir, "./LICENSE"), path.resolve(pkgDir, "./LICENSE"), replacements);
    SyncFileUtils.copyTextFileWithReplacementsIfMissing(path.resolve(templatesDir, "./README.md"), path.resolve(pkgDir, "./README.md"), replacements);
    SyncFileUtils.copyTextFileWithReplacementsIfMissing(path.resolve(templatesDir, "./gitignore"), path.resolve(pkgDir, "./.gitignore"), replacements);
    SyncFileUtils.copyTextFileWithReplacementsIfMissing(path.resolve(templatesDir, "./babel.config.json"), path.resolve(pkgDir, "./babel.config.json"), replacements);
    SyncFileUtils.copyTextFileWithReplacementsIfMissing(path.resolve(templatesDir, "./rollup.config.js"), path.resolve(pkgDir, "./rollup.config.js"), replacements);
    SyncFileUtils.copyTextFileWithReplacementsIfMissing(path.resolve(templatesDir, "./tsconfig.json"), path.resolve(pkgDir, "./tsconfig.json"), replacements);
    SyncFileUtils.copyTextFileWithReplacementsIfMissing(path.resolve(templatesDir, "./src/constants/build.ts"), path.resolve(srcConstantsDir, "./build.ts"), replacements);
    SyncFileUtils.copyTextFileWithReplacementsIfMissing(path.resolve(templatesDir, "./src/constants/runtime.ts"), path.resolve(srcConstantsDir, "./runtime.ts"), replacements);
    SyncFileUtils.copyTextFileWithReplacementsIfMissing(path.resolve(templatesDir, "./src/main.ts"), path.resolve(srcDir, "./main.ts"), replacements);

    const mainFileName = `./${mainName}.ts`;
    const mainSrcFileName = `./src/${mainName}.ts`;

    SyncFileUtils.copyTextFileWithReplacementsIfMissing(path.resolve(templatesDir, "./src/project-name.ts"), path.resolve(srcDir, mainFileName), replacements);

    const distFile = `./dist/${mainName}.js`;

    const pkgJSON = SyncFileUtils.readJsonFile(packageJsonPath);

    if (!isReadonlyJsonObject(pkgJSON)) {
        throw new TypeError('package.json was invalid');
    }

    let scriptsObject = pkgJSON?.scripts ?? {};
    if (!isReadonlyJsonObject(scriptsObject)) {
        scriptsObject = {};
    }

    let binObject = pkgJSON?.bin ?? {};
    if (!isReadonlyJsonObject(binObject)) {
        binObject = {};
    }

    const newPkgJson = {
        ...pkgJSON,
        private: true,
        main: distFile,
        bin: {
            ...binObject,
            [mainName]: distFile
        },
        scripts: {
            ...scriptsObject,
            "start-prod": `node ${distFile}`,
            "start": `ts-node ${mainSrcFileName}`,
            "build": "rollup -c"
        }
    };

    if (!isEqual(newPkgJson, pkgJSON)) {
        SyncFileUtils.writeJsonFile(packageJsonPath, newPkgJson);
    } else {
        LOG.warn(`Warning! No changes to package.json detected`);
    }

    LOG.debug(`Initializing core git submodule from ${CORE_PACKAGE_GIT_URL} and branch ${CORE_PACKAGE_GIT_BRANCH}`);
    await GitUtils.initSubModule(CORE_PACKAGE_GIT_URL, path.resolve('src/', CORE_PACKAGE_GIT_PATH), CORE_PACKAGE_GIT_BRANCH);

    LOG.debug(`Installing packages: `, DEFAULT_INSTALLED_PACKAGES);
    await install(
        DEFAULT_INSTALLED_PACKAGES,
        installConfig
    );

    LOG.debug(`Adding files to git`);
    await GitUtils.addFiles(
        [
            "./LICENSE",
            "./README.md",
            "./.gitignore",
            "./.gitmodules",
            "./babel.config.json",
            "./rollup.config.js",
            "./tsconfig.json",
            "./package.json",
            "./package-lock.json",
            "./src"
        ]
    );

    LOG.debug(`Initial git commit`);
    await GitUtils.commit('first commit');

    LOG.debug(`Renaming main git branch`);
    await GitUtils.renameMainBranch('main');

}
