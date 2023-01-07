![Tests](https://github.com/heusalagroup/create-command/actions/workflows/tests.yml/badge.svg)

### Tests for @heusalagroup/create-command

Note! These tests will:

 * Create a temporary folder on system `/tmp` (can be overridden with 
   `TEMP_DIR` environment variable)
 * `LOG_LEVEL` environment variable can be used to add or suppress diagnostic 
   output
 * Build the `create-command` factory tool in the parent folder to 
   `../dist/create-command.js`
 * Attempt to use the just built factory command `../dist/create-command.js` to 
   initialize a new CLI command project directory to the temporary folder
 * Attempt to install packages in the new project directory
 * Attempt to build the new project
 * Attempt to execute the new project and verify that it print correct 
   output (`Hello world`)
 * Remove the temporary directory

These tests are intended to be run automatically using GitHub Actions (see `.
github/workflows/tests.yml`). However,
you can run it manually. Just understand, that it makes changes to your 
system. Run at your own risk. Better to run inside a safe container.

The tests can be executed:

```shell
cd tests
npm test
```

