"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var AllowedTag_exports = {};
__export(AllowedTag_exports, {
  AllowedTagManager: () => AllowedTagManager,
  DefaultAllowedTagSelection: () => DefaultAllowedTagSelection
});
module.exports = __toCommonJS(AllowedTag_exports);
var import_api_client_core = require("@gadgetinc/api-client-core");
var import_support = require("../support.js");
const DefaultAllowedTagSelection = {
  "__typename": true,
  "createdAt": true,
  "id": true,
  "keyword": true,
  "updatedAt": true
};
;
;
;
;
;
;
;
;
const apiIdentifier = "allowedTag";
const pluralApiIdentifier = "allowedTags";
async function createAllowedTag(variables, options) {
  const newVariables = (0, import_support.disambiguateActionParams)(
    this["create"],
    void 0,
    variables
  );
  return await (0, import_api_client_core.actionRunner)(
    this,
    "createAllowedTag",
    DefaultAllowedTagSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      "allowedTag": {
        value: newVariables.allowedTag,
        required: false,
        type: "CreateAllowedTagInput"
      }
    },
    options,
    null,
    false
  );
}
async function updateAllowedTag(id, variables, options) {
  const newVariables = (0, import_support.disambiguateActionParams)(
    this["update"],
    id,
    variables
  );
  return await (0, import_api_client_core.actionRunner)(
    this,
    "updateAllowedTag",
    DefaultAllowedTagSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      },
      "allowedTag": {
        value: newVariables.allowedTag,
        required: false,
        type: "UpdateAllowedTagInput"
      }
    },
    options,
    null,
    false
  );
}
async function deleteAllowedTag(id, options) {
  return await (0, import_api_client_core.actionRunner)(
    this,
    "deleteAllowedTag",
    null,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      }
    },
    options,
    null,
    false
  );
}
class AllowedTagManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one allowedTag by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await (0, import_api_client_core.findOneRunner)(
          this,
          "allowedTag",
          id,
          DefaultAllowedTagSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "allowedTag",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultAllowedTagSelection
      }
    );
    /**
    * Finds one allowedTag by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await (0, import_api_client_core.findOneRunner)(
          this,
          "allowedTag",
          id,
          DefaultAllowedTagSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "allowedTag",
        modelApiIdentifier: "allowedTag",
        defaultSelection: DefaultAllowedTagSelection
      }
    );
    /**
    * Finds many allowedTag. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await (0, import_api_client_core.findManyRunner)(
          this,
          "allowedTags",
          DefaultAllowedTagSelection,
          "allowedTag",
          options
        );
      },
      {
        type: "findMany",
        operationName: "allowedTags",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultAllowedTagSelection
      }
    );
    /**
    * Finds the first matching allowedTag. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "allowedTags",
          DefaultAllowedTagSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "allowedTags",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultAllowedTagSelection
      }
    );
    /**
    * Finds the first matching allowedTag. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "allowedTags",
          DefaultAllowedTagSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return (list == null ? void 0 : list[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "allowedTags",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultAllowedTagSelection
      }
    );
    /**
    * Finds one allowedTag by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findById = Object.assign(
      async (value, options) => {
        return await (0, import_api_client_core.findOneByFieldRunner)(
          this,
          "allowedTags",
          "id",
          value,
          DefaultAllowedTagSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "allowedTags",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultAllowedTagSelection
      }
    );
    this.create = Object.assign(
      createAllowedTag,
      {
        type: "action",
        operationName: "createAllowedTag",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultAllowedTagSelection,
        variables: {
          "allowedTag": {
            required: false,
            type: "CreateAllowedTagInput"
          }
        },
        hasAmbiguousIdentifier: false,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: true,
        paramOnlyVariables: [],
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    /**
    * Executes the bulkCreate action with the given inputs.
    */
    this.bulkCreate = Object.assign(
      async (inputs, options) => {
        const fullyQualifiedInputs = inputs.map(
          (input) => (0, import_support.disambiguateActionParams)(
            this["create"],
            void 0,
            input
          )
        );
        return await (0, import_api_client_core.actionRunner)(
          this,
          "bulkCreateAllowedTags",
          DefaultAllowedTagSelection,
          "allowedTag",
          "allowedTags",
          true,
          {
            inputs: {
              value: fullyQualifiedInputs,
              ...this["bulkCreate"].variables["inputs"]
            }
          },
          options,
          null,
          false
        );
      },
      {
        type: "action",
        operationName: "bulkCreateAllowedTags",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "allowedTags",
        isBulk: true,
        defaultSelection: DefaultAllowedTagSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkCreateAllowedTagsInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.update = Object.assign(
      updateAllowedTag,
      {
        type: "action",
        operationName: "updateAllowedTag",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultAllowedTagSelection,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          },
          "allowedTag": {
            required: false,
            type: "UpdateAllowedTagInput"
          }
        },
        hasAmbiguousIdentifier: false,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: true,
        paramOnlyVariables: [],
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    /**
    * Executes the bulkUpdate action with the given inputs.
    */
    this.bulkUpdate = Object.assign(
      async (inputs, options) => {
        const fullyQualifiedInputs = inputs.map(
          (input) => (0, import_support.disambiguateActionParams)(
            this["update"],
            void 0,
            input
          )
        );
        return await (0, import_api_client_core.actionRunner)(
          this,
          "bulkUpdateAllowedTags",
          DefaultAllowedTagSelection,
          "allowedTag",
          "allowedTags",
          true,
          {
            inputs: {
              value: fullyQualifiedInputs,
              ...this["bulkUpdate"].variables["inputs"]
            }
          },
          options,
          null,
          false
        );
      },
      {
        type: "action",
        operationName: "bulkUpdateAllowedTags",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "allowedTags",
        isBulk: true,
        defaultSelection: DefaultAllowedTagSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkUpdateAllowedTagsInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.delete = Object.assign(
      deleteAllowedTag,
      {
        type: "action",
        operationName: "deleteAllowedTag",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: null,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          }
        },
        hasAmbiguousIdentifier: false,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: false,
        paramOnlyVariables: [],
        hasReturnType: false,
        acceptsModelInput: false
      }
    );
    /**
    * Executes the bulkDelete action with the given inputs. Deletes the records on the server.
    */
    this.bulkDelete = Object.assign(
      async (ids, options) => {
        return await (0, import_api_client_core.actionRunner)(
          this,
          "bulkDeleteAllowedTags",
          null,
          "allowedTag",
          "allowedTags",
          true,
          {
            ids: {
              value: ids,
              ...this["bulkDelete"].variables["ids"]
            }
          },
          options,
          null,
          false
        );
      },
      {
        type: "action",
        operationName: "bulkDeleteAllowedTags",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "allowedTags",
        isBulk: true,
        defaultSelection: null,
        variables: {
          ids: {
            required: true,
            type: "[GadgetID!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: false
      }
    );
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AllowedTagManager,
  DefaultAllowedTagSelection
});
//# sourceMappingURL=AllowedTag.js.map
