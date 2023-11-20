/**
* This is the Gadget API client library for:
*
*            _
*    ___ ___| |_ __ _  __ _
*   / _ \_  / __/ _` |/ _` |
*  |  __// /| || (_| | (_| |
*   \___/___|\__\__,_|\__, |
*                     |___/
*
* Built for environment "Development" at version 124
* API docs: https://docs.gadget.dev/api/eztag
* Edit this app here: https://eztag.gadget.app/edit
*/
export { BrowserSessionStorageType, GadgetClientError, GadgetConnection, GadgetInternalError, GadgetOperationError, GadgetRecord, GadgetRecordList, GadgetValidationError, InvalidRecordError } from "@gadgetinc/api-client-core";
export type { AuthenticationModeOptions, BrowserSessionAuthenticationModeOptions, ClientOptions, InvalidFieldError, Select } from "@gadgetinc/api-client-core";
export * from "./Client.js";
export * from "./types.js";
declare global {
    interface Window {
        gadgetConfig: {
            apiKeys: {
                shopify: string;
            };
            environment: string;
            env: Record<string, any>;
            authentication?: {
                signInPath: string;
                redirectOnSuccessfulSignInPath: string;
            };
        };
    }
}
