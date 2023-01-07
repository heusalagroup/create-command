[![Tests](https://github.com/heusalagroup/create-command/actions/workflows/tests.yml/badge.svg)](https://github.com/heusalagroup/create-command/actions?query=workflow%3Atests.yml)

# Tests for @heusalagroup/create-command

This folder contains tests for our automated CI system (GitHub Actions).

## Temporary directory

Automated tests will use a temporary directory where the factory command will
create test projects as part of the tests. The location of this folder can be
customized using the `TEMP_DIR` environment variable. It will default to `/tmp`
if not specified.

## Logging

You can customize the log output using the `LOG_LEVEL` environment variable.
Possible values are: `NONE`, `DEBUG`, `INFO`, `WARN`, and `ERROR`.

## Test cases

These tests are intended to be run automatically using GitHub Actions (
see [`.github/workflows/tests.yml`](https://github.com/heusalagroup/create-command/blob/main/.github/workflows/tests.yml))
. However, you can run them manually if you wish. Just be aware that running the
tests will make changes to your system. It is recommended to run them inside a
safe container to avoid any potential issues.

The following actions are performed during the tests:

 1. A temporary folder is created on the system at the location specified by 
    `TEMP_DIR`.
 2. The `create-command` factory tool is built in the parent folder and saved 
    to `../dist/create-command.js`.
 3. The just-built factory command (`../dist/create-command.js`) is used to 
    initialize a new CLI command project directory in the temporary folder.
 4. Packages are installed in the new project directory.
 5. The new project is built.
 6. The new project is executed and the output (`Hello world`) is verified.
 7. The temporary directory is removed (this will also be run in the event of 
    any errors).

## Running the tests

To run the tests, execute the following commands:

```
cd tests
npm test
```

## Clearing the cache

You can clear the test environment cache by running the following commands:

```
cd tests
npm run clear
```
