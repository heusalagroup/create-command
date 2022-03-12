// Copyright (c) 2022. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { resolve as pathResolve } from "path";
import { DEFAULT_LOG_LEVEL } from "./constants/runtime";
import { LogService } from "./fi/hg/core/LogService";
import { parseLogLevel } from "./fi/hg/core/types/LogLevel";
import { parseReadonlyJsonObject, ReadonlyJsonObject } from "./fi/hg/core/Json";
import { CreatePackageConfig } from "./fi/hg/create/types/CreatePackageConfig";
import { createPackage } from "./fi/hg/create/createPackage";
import { CreatePackageConfigDataObject } from "./fi/hg/create/types/CreatePackageConfigDataObject";

const LOG = LogService.createLogger('main');

const logLevel = parseLogLevel(DEFAULT_LOG_LEVEL);
if ( logLevel ) {
    LOG.debug(`Setting log level as `, logLevel);
    LogService.setLogLevel(logLevel);
}

export async function main (): Promise<void> {

    const configData : CreatePackageConfigDataObject = {
        preferredPackageSystem: "npm",
        gitOrganization: '@heusalagroup',
        organizationName: 'Heusala Group',
        organizationEmail: 'info@heusalagroup.fi',
        sourceDir: './src',
        buildDir: './dist',
        templatesDir: '../templates',
        mainSourceFileTemplate: './src/project-name.ts',
        files: [
            "./LICENSE",
            "./README.md",
            "./.gitignore",
            "./babel.config.json",
            "./rollup.config.js",
            "./tsconfig.json",
            "./src/constants/build.ts",
            "./src/constants/runtime.ts",
            "./src/main.ts"
        ],
        gitSubmodules: [
            {
                url: 'git@github.com:heusalagroup/fi.hg.core.git',
                path: 'src/fi/hg/core',
                branch: 'main'
            }
        ],
        packages: [
            "@types/node",
            "@types/lodash",
            "@babel/cli",
            "@babel/core",
            "@babel/preset-env",
            "@babel/preset-typescript",
            "@rollup/plugin-babel",
            "@rollup/plugin-commonjs",
            "@rollup/plugin-inject",
            "@rollup/plugin-json",
            "@rollup/plugin-node-resolve",
            "@rollup/plugin-replace",
            "@rollup/plugin-typescript",
            "typescript",
            "tslib",
            "ts-node",
            "rollup-plugin-uglify",
            "rollup",
            "lodash"
        ],
        gitCommitMessage: 'first commit',
        gitBranch: 'main'
    };

    const config = CreatePackageConfig.createFromDataObject(configData);
    config.setTemplatesDirectory(pathResolve(__dirname, configData?.templatesDir ?? "../templates"));
    config.setPackageJsonModifier(modifyPackageJsonForShellCommand);
    await createPackage(config);

}

function modifyPackageJsonForShellCommand (
    pkgJSON  : ReadonlyJsonObject,
    config   : CreatePackageConfig
) : ReadonlyJsonObject {
    const scriptsObject : ReadonlyJsonObject = parseReadonlyJsonObject(pkgJSON?.scripts) ?? {};
    const binObject     : ReadonlyJsonObject = parseReadonlyJsonObject(pkgJSON?.bin) ?? {};
    const dependencies  : ReadonlyJsonObject = parseReadonlyJsonObject(pkgJSON?.dependencies) ?? {};
    const distFile = config.getDistFile();
    const mainName = config.getMainName();
    const mainSrcFileName = config.getMainSourceFileName();
    return {
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
        },
        dependencies: {},
        devDependencies: dependencies
    };
}
