import { Client } from "@gadget-client/eztag";

export const api = new Client({ environment: window.gadgetConfig.environment });
