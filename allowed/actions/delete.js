import { deleteRecord, ActionOptions, DeleteAllowedTagActionContext, preventCrossShopDataAccess } from "gadget-server";

/**
 * @param { DeleteAllowedTagActionContext } context
 */
export async function run({ params, record, logger, api, connections }) {
  // only allow deletion if the request comes from the same shop that relates to the record
  await preventCrossShopDataAccess(params, record);
  await deleteRecord(record);
}

/**
 * @param { DeleteAllowedTagActionContext } context
 */
export async function onSuccess({ params, record, logger, api }) {
  // Your logic goes here
}

/** @type { ActionOptions } */
export const options = {
  actionType: "delete",
};