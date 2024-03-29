// Copyright (c) CURRENT-YEAR. ORGANISATION-NAME <ORGANISATION-EMAIL>. All rights reserved.

import { ProcessUtils } from "./fi/hg/core/ProcessUtils";

// Must be first import to define environment variables before anything else
ProcessUtils.initEnvFromDefaultFiles();

import {
    COMMAND_NAME,
    LOG_LEVEL
} from "./constants/runtime";

import { LogService } from "./fi/hg/core/LogService";
import { LogLevel } from "./fi/hg/core/types/LogLevel";

LogService.setLogLevel(LOG_LEVEL);

import { CommandExitStatus } from "./fi/hg/core/cmd/types/CommandExitStatus";
import { RequestClientImpl } from "./fi/hg/core/RequestClientImpl";
import { CommandArgumentUtils } from "./fi/hg/core/cmd/utils/CommandArgumentUtils";
import { ParsedCommandArgumentStatus } from "./fi/hg/core/cmd/types/ParsedCommandArgumentStatus";
import { Headers } from "./fi/hg/core/request/types/Headers";
import { BUILD_USAGE_URL, BUILD_WITH_FULL_USAGE } from "./constants/build";

const LOG = LogService.createLogger('main');

export async function main (
    args: string[] = []
) : Promise<CommandExitStatus> {

    try {

        Headers.setLogLevel(LogLevel.INFO);
        RequestClientImpl.setLogLevel(LogLevel.INFO);

        LOG.debug(`Loglevel as ${LogService.getLogLevelString()}`);

        const {scriptName, parseStatus, exitStatus, errorString} = CommandArgumentUtils.parseArguments(COMMAND_NAME, args);

        if ( parseStatus === ParsedCommandArgumentStatus.HELP || parseStatus === ParsedCommandArgumentStatus.VERSION ) {
            console.log(getMainUsage(scriptName));
            return exitStatus;
        }

        if (errorString) {
            console.error(`ERROR: ${errorString}`);
            return exitStatus;
        }

        ProcessUtils.setupDestroyHandler( () => {

            LOG.debug('Stopping command from process utils event');

        }, (err : any) => {
            LOG.error('Error while shutting down the service: ', err);
        });

        console.log(`Hello world`);

        return CommandExitStatus.OK;

    } catch (err) {
        LOG.error(`Fatal error: `, err);
        return CommandExitStatus.FATAL_ERROR;
    }

}

/**
 *
 * @param scriptName
 * @nosideeffects
 * @__PURE__
 */
export function getMainUsage (
    scriptName: string
): string {

    /* @__PURE__ */if ( /* @__PURE__ */BUILD_WITH_FULL_USAGE ) {

        return `USAGE: ${/* @__PURE__ */scriptName} [OPT(s)] ARG(1) [...ARG(N)]

  ORGANISATION-NAME command.
  
...and OPT is one of:

    -h --help          Print help
    -v --version       Print version
    --                 Disables option parsing

  Environment variables:

    LOG_LEVEL as one of:
    
      ALL
      DEBUG
      INFO
      WARN
      ERROR
      NONE
`;
    } else {
        return `USAGE: ${/* @__PURE__ */scriptName} ARG(1) [...ARG(N)]
See ${/* @__PURE__ */BUILD_USAGE_URL}
`;
    }
}
