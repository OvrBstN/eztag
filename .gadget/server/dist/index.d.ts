/**
* This is the Gadget server side types library for:
*
*            _
*    ___ ___| |_ __ _  __ _
*   / _ \_  / __/ _` |/ _` |
*  |  __// /| || (_| | (_| |
*   \___/___|\__\__,_|\__, |
*                     |___/
*
* Built for environment `Development` at version 124
* Framework version: ^0.2.0
* Edit this app here: https://eztag.gadget.dev/edit
*/
import type { Client } from "@gadget-client/eztag";
import { Logger } from "./AmbientContext";
export * from "./AccessControlMetadata";
export * from "./AmbientContext";
export * from "./AppConfigs";
export * from "./AppConfiguration";
export * from "./AppConnections";
export * from "./auth";
export * from "./effects";
export * as DefaultEmailTemplates from "./email-templates";
export * from "./emails";
export { InvalidStateTransitionError } from "./errors";
export * from "./global-actions";
export * from "./routes";
export * from "./state-chart";
export * from "./types";
export * from "./models/Session";
export * from "./models/ShopifyGdprRequest";
export * from "./models/ShopifyProduct";
export * from "./models/ShopifyShop";
export * from "./models/ShopifySync";
export * from "./models/AllowedTag";
/**
 * An instance of the Gadget logger
 */
declare let logger: Logger;
/**
 * An instance of the Gadget API client that has admin permissions
 */
declare let api: Client;
export { api, logger };
