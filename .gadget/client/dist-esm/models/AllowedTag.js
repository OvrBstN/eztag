import {
  actionRunner,
  findManyRunner,
  findOneRunner,
  findOneByFieldRunner
} from "@gadgetinc/api-client-core";
import { disambiguateActionParams } from "../support.js";
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
  const newVariables = disambiguateActionParams(
    this["create"],
    void 0,
    variables
  );
  return await actionRunner(
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
  const newVariables = disambiguateActionParams(
    this["update"],
    id,
    variables
  );
  return await actionRunner(
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
  return await actionRunner(
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
        return await findOneRunner(
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
        const record = await findOneRunner(
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
        return await findManyRunner(
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
        const list = await findManyRunner(
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
        const list = await findManyRunner(
          this,
          "allowedTags",
          DefaultAllowedTagSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
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
        return await findOneByFieldRunner(
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
          (input) => disambiguateActionParams(
            this["create"],
            void 0,
            input
          )
        );
        return await actionRunner(
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
          (input) => disambiguateActionParams(
            this["update"],
            void 0,
            input
          )
        );
        return await actionRunner(
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
        return await actionRunner(
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
export {
  AllowedTagManager,
  DefaultAllowedTagSelection
};
//# sourceMappingURL=AllowedTag.js.map
