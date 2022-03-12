// Copyright (c) 2022. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { CreatePackageConfigDataObject } from "./src/fi/hg/create/types/CreatePackageConfigDataObject";

declare module "create.config.json" {
    declare const templateData: CreatePackageConfigDataObject;
    export default templateData;
}
