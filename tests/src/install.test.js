// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

const { execSync } = require('child_process');
const PATH = require('path');

const BASE_TEMP_DIR = process?.env?.TEMP_DIR ?? '/tmp';
const PROJECT_DIR = process?.env?.PROJECT_DIR ?? PATH.dirname(PATH.dirname(PATH.resolve(__dirname)));

console.log(
    "PROJECT_DIR : ", PROJECT_DIR,
    "\nTEMP_DIR    : ", BASE_TEMP_DIR);

describe("create-command", () => {

    const TEMP_DIR = PATH.resolve(PATH.join(BASE_TEMP_DIR, `create-command-${(new Date()).getTime()}`));

    beforeEach( () => {
        run(`mkdir -p "${TEMP_DIR}"`);
        chdir(PROJECT_DIR);
    });

    afterEach( () => {
        run(`rm -rf "${TEMP_DIR}"`);
    });

    it('should install command successfully', () => {
        run(`npm run build`);
        run('node ./dist/create-command.js test-command --yes');
        chdir(TEMP_DIR);
        run('npm install');
        run('npm run build');
        const output = run('node ./dist/test-command.js').toString();
        expect(output).toMatch(/Hello world/);
    });

});

function run (command) {
    try {
        console.log(`# ${command}`)
        return execSync(command);
    } catch (err) {
        throw new Error(`Command '${command}' failed: ${err}`);
    }
}

function chdir (dir) {
    try {
        console.log(`# cd ${dir}`)
        process.chdir(dir);
    } catch (err) {
        throw new Error(`Directory change to '${dir}' failed: ${err}`);
    }
}
