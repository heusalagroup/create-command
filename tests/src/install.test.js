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

    it('should install command successfully locally', () => {

        // Build the factory tool
        run(`npm run build`);

        // Move to temporary directory
        chdir(PATH.join(TEMP_DIR));

        // Create the project from temporary directory
        run(`node ${PROJECT_DIR}/dist/create-command.js test-command --yes`);

        // Move to the new project directory
        chdir(PATH.join(TEMP_DIR, 'test-command'));

        // Install project packages
        run('npm install');

        // Build the project
        run('npm run build');

        // Test the built command
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
