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
