// Copyright (c) 2022. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import {
    BUILD_DEFAULT_EXECA_STDIO,
    BUILD_DEFAULT_INSTALLED_PACKAGES,
    BUILD_PREFERED_PACKAGE_SYSTEM
} from "./build";

export const PREFERED_PACKAGE_SYSTEM     = BUILD_PREFERED_PACKAGE_SYSTEM;
export const DEFAULT_EXECA_STDIO         = BUILD_DEFAULT_EXECA_STDIO;
export const DEFAULT_INSTALLED_PACKAGES  = BUILD_DEFAULT_INSTALLED_PACKAGES;
export const DEFAULT_LOG_LEVEL           = process?.env?.CREATE_COMMAND_LOG_LEVEL ?? "INFO";

export const DEFAULT_GIT_ORGANIZATION  = '@heusalagroup';
export const DEFAULT_ORGANIZATION_NAME = 'Heusala Group';
export const DEFAULT_ORGANIZATION_EMAIL = 'info@heusalagroup.fi';

export const CORE_PACKAGE_GITHUB   = 'heusalagroup/fi.hg.core';
export const CORE_PACKAGE_GIT_URL  = `git@github.com:${CORE_PACKAGE_GITHUB}.git`;
export const CORE_PACKAGE_GIT_PATH = 'fi/hg/core';
export const CORE_PACKAGE_GIT_BRANCH = 'main';
