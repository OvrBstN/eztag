import {
  GadgetConnection,
  GadgetRecord,
  GadgetRecordImplementation,
  GadgetRecordList,
  GadgetNonUniqueDataError,
  actionRunner,
  findManyRunner,
  findOneRunner,
  findOneByFieldRunner,
  DefaultSelection,
  LimitToKnownKeys,
  Selectable
} from "@gadgetinc/api-client-core";

import {
  Query,
  ExplicitNestingRequired,
  Select,
  DeepFilterNever,
  IDsList,
      AllowedTag,
      AllowedTagSort,
      AllowedTagFilter,
      AvailableAllowedTagSelection,
      CreateAllowedTagInput,
      UpdateAllowedTagInput,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultAllowedTagSelection = {
  "__typename": true,
  "createdAt": true,
  "id": true,
  "keyword": true,
  "updatedAt": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "allowedTag". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedAllowedTagOrDefault<Options extends Selectable<AvailableAllowedTagSelection>> = DeepFilterNever<
  Select<
    AllowedTag,
    DefaultSelection<
      AvailableAllowedTagSelection,
      Options,
      typeof DefaultAllowedTagSelection
    >
  >>;

/** Options that can be passed to the `AllowedTagManager#findOne` method */
export interface FindOneAllowedTagOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableAllowedTagSelection;
};

/** Options that can be passed to the `AllowedTagManager#maybeFindOne` method */
export interface MaybeFindOneAllowedTagOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableAllowedTagSelection;
};

/** Options that can be passed to the `AllowedTagManager#findMany` method */
export interface FindManyAllowedTagsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableAllowedTagSelection;
  /** Return records sorted by these sorts */
  sort?: AllowedTagSort | AllowedTagSort[] | null;
  /** Only return records matching these filters. */
  filter?: AllowedTagFilter | AllowedTagFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

/** Options that can be passed to the `AllowedTagManager#findFirst` method */
export interface FindFirstAllowedTagOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableAllowedTagSelection;
  /** Return records sorted by these sorts */
  sort?: AllowedTagSort | AllowedTagSort[] | null;
  /** Only return records matching these filters. */
  filter?: AllowedTagFilter | AllowedTagFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};

/** Options that can be passed to the `AllowedTagManager#maybeFindFirst` method */
export interface MaybeFindFirstAllowedTagOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableAllowedTagSelection;
  /** Return records sorted by these sorts */
  sort?: AllowedTagSort | AllowedTagSort[] | null;
  /** Only return records matching these filters. */
  filter?: AllowedTagFilter | AllowedTagFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


export interface CreateAllowedTagOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableAllowedTagSelection;
};


export interface UpdateAllowedTagOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableAllowedTagSelection;
};


export interface DeleteAllowedTagOptions {
};


const apiIdentifier = "allowedTag";
const pluralApiIdentifier = "allowedTags";


    
  /**
   * The fully-qualified, expanded form of the inputs for executing this action.
   * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
   **/
  export type FullyQualifiedCreateAllowedTagVariables = {
          allowedTag?: CreateAllowedTagInput,
      }

  /**
   * The inputs for executing create on allowedTag.
   * This is the flattened style of inputs, suitable for general use, and should be preferred.
   **/

    export type CreateAllowedTagVariables = CreateAllowedTagInput;



/**
 * The return value from executing create on allowedTag.
 * "Is a GadgetRecord of the model's type."
 **/
export type CreateAllowedTagResult<Options extends CreateAllowedTagOptions> =
  SelectedAllowedTagOrDefault<Options> extends void ? void : GadgetRecord<SelectedAllowedTagOrDefault<Options>>
;


/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function createAllowedTag<Options extends CreateAllowedTagOptions>(
  
    variables: CreateAllowedTagVariables,

  options?: LimitToKnownKeys<Options, CreateAllowedTagOptions>
): Promise<CreateAllowedTagResult<Options>>;

// Fully qualified, nested api identifier overload
async function createAllowedTag<Options extends CreateAllowedTagOptions>(
  
      variables: FullyQualifiedCreateAllowedTagVariables,
  
  options?: LimitToKnownKeys<Options, CreateAllowedTagOptions>
): Promise<CreateAllowedTagResult<Options>>;

// Function implementation
async function createAllowedTag<Options extends CreateAllowedTagOptions>(
  this: AllowedTagManager,
  
      variables: CreateAllowedTagVariables | FullyQualifiedCreateAllowedTagVariables,
  
  options?: LimitToKnownKeys<Options, CreateAllowedTagOptions>
): Promise<CreateAllowedTagResult<Options>> {
    const newVariables = disambiguateActionParams(
      this["create"],
       undefined,
      variables
    );

  return (await actionRunner<SelectedAllowedTagOrDefault<Options>>(
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
          type: "CreateAllowedTagInput",
        },
          },
    options,
    null,
    false
  ));
}

  
    
  /**
   * The fully-qualified, expanded form of the inputs for executing this action.
   * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
   **/
  export type FullyQualifiedUpdateAllowedTagVariables = {
          allowedTag?: UpdateAllowedTagInput,
      }

  /**
   * The inputs for executing update on allowedTag.
   * This is the flattened style of inputs, suitable for general use, and should be preferred.
   **/

    export type UpdateAllowedTagVariables = UpdateAllowedTagInput;



/**
 * The return value from executing update on allowedTag.
 * "Is a GadgetRecord of the model's type."
 **/
export type UpdateAllowedTagResult<Options extends UpdateAllowedTagOptions> =
  SelectedAllowedTagOrDefault<Options> extends void ? void : GadgetRecord<SelectedAllowedTagOrDefault<Options>>
;


/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function updateAllowedTag<Options extends UpdateAllowedTagOptions>(
  id: string,
    variables: UpdateAllowedTagVariables,

  options?: LimitToKnownKeys<Options, UpdateAllowedTagOptions>
): Promise<UpdateAllowedTagResult<Options>>;

// Fully qualified, nested api identifier overload
async function updateAllowedTag<Options extends UpdateAllowedTagOptions>(
  id: string,
      variables: FullyQualifiedUpdateAllowedTagVariables,
  
  options?: LimitToKnownKeys<Options, UpdateAllowedTagOptions>
): Promise<UpdateAllowedTagResult<Options>>;

// Function implementation
async function updateAllowedTag<Options extends UpdateAllowedTagOptions>(
  this: AllowedTagManager,
  id: string,
      variables: UpdateAllowedTagVariables | FullyQualifiedUpdateAllowedTagVariables,
  
  options?: LimitToKnownKeys<Options, UpdateAllowedTagOptions>
): Promise<UpdateAllowedTagResult<Options>> {
    const newVariables = disambiguateActionParams(
      this["update"],
       id,
      variables
    );

  return (await actionRunner<SelectedAllowedTagOrDefault<Options>>(
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
          type: "GadgetID",
        },
                    "allowedTag": {
          value: newVariables.allowedTag,
          required: false,
          type: "UpdateAllowedTagInput",
        },
          },
    options,
    null,
    false
  ));
}

  
    

/**
 * The return value from executing delete on allowedTag.
 * "Is void because this action deletes the record"
 **/
export type DeleteAllowedTagResult<Options extends DeleteAllowedTagOptions> =
  void extends void ? void : GadgetRecord<SelectedAllowedTagOrDefault<Options>>
;


/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */

// Fully qualified, nested api identifier overload
async function deleteAllowedTag<Options extends DeleteAllowedTagOptions>(
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteAllowedTagOptions>
): Promise<DeleteAllowedTagResult<Options>>;

// Function implementation
async function deleteAllowedTag<Options extends DeleteAllowedTagOptions>(
  this: AllowedTagManager,
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteAllowedTagOptions>
): Promise<DeleteAllowedTagResult<Options>> {

  return (await actionRunner<void>(
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
          type: "GadgetID",
        },
                },
    options,
    null,
    false
  ));
}

  



/** All the actions available at the collection level and record level for "allowedTag" */
export class AllowedTagManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one allowedTag by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneAllowedTagOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneAllowedTagOptions>):
    Promise<
      GadgetRecord<
        SelectedAllowedTagOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "allowedTag";
  modelApiIdentifier: "allowedTag";
  defaultSelection: typeof DefaultAllowedTagSelection;
  selectionType: AvailableAllowedTagSelection;
  optionsType: FindOneAllowedTagOptions;
  schemaType: Query["allowedTag"];
} = Object.assign(
  async <Options extends FindOneAllowedTagOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneAllowedTagOptions>) => {
    return await findOneRunner<SelectedAllowedTagOrDefault<Options>>(
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
    defaultSelection: DefaultAllowedTagSelection,
  } as any
)

  
    /**
 * Finds one allowedTag by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneAllowedTagOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneAllowedTagOptions>):
    Promise<
      GadgetRecord<
        SelectedAllowedTagOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "allowedTag";
  modelApiIdentifier: "allowedTag";
  defaultSelection: typeof DefaultAllowedTagSelection;
  selectionType: AvailableAllowedTagSelection;
  optionsType: MaybeFindOneAllowedTagOptions;
  schemaType: Query["allowedTag"];
} = Object.assign(
  async <Options extends MaybeFindOneAllowedTagOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneAllowedTagOptions>) => {
    const record = await findOneRunner<SelectedAllowedTagOrDefault<Options>>(
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
    defaultSelection: DefaultAllowedTagSelection,
  } as any
)

  
    /**
 * Finds many allowedTag. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyAllowedTagsOptions>(options?: LimitToKnownKeys<Options, FindManyAllowedTagsOptions>):
    Promise<
      GadgetRecordList<
        SelectedAllowedTagOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "allowedTags";
  modelApiIdentifier: "allowedTag";
  defaultSelection: typeof DefaultAllowedTagSelection;
  selectionType: AvailableAllowedTagSelection;
  optionsType: FindManyAllowedTagsOptions;
  schemaType: Query["allowedTag"];
} = Object.assign(
  async <Options extends FindManyAllowedTagsOptions>(options?: LimitToKnownKeys<Options, FindManyAllowedTagsOptions>):
    Promise<
      GadgetRecordList<
        SelectedAllowedTagOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedAllowedTagOrDefault<Options>>(
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
    defaultSelection: DefaultAllowedTagSelection,
  } as any
);

  
    /**
 * Finds the first matching allowedTag. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstAllowedTagOptions>(options?: LimitToKnownKeys<Options, FindFirstAllowedTagOptions>):
    Promise<
      GadgetRecord<
        SelectedAllowedTagOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "allowedTags";
  modelApiIdentifier: "allowedTag";
  defaultSelection: typeof DefaultAllowedTagSelection;
  selectionType: AvailableAllowedTagSelection;
  optionsType: FindFirstAllowedTagOptions;
  schemaType: Query["allowedTag"];
} = Object.assign(
  async <Options extends FindFirstAllowedTagOptions>(options?: LimitToKnownKeys<Options, FindFirstAllowedTagOptions>):
    Promise<
      GadgetRecord<
        SelectedAllowedTagOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedAllowedTagOrDefault<Options>>(
      this,
      "allowedTags",
      DefaultAllowedTagSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "allowedTags",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultAllowedTagSelection,
  } as any
);

  
    /**
 * Finds the first matching allowedTag. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstAllowedTagOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstAllowedTagOptions>):
    Promise<
      GadgetRecord<
        SelectedAllowedTagOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "allowedTags";
  modelApiIdentifier: "allowedTag";
  defaultSelection: typeof DefaultAllowedTagSelection;
  selectionType: AvailableAllowedTagSelection;
  optionsType: MaybeFindFirstAllowedTagOptions;
  schemaType: Query["allowedTag"];
} = Object.assign(
  async <Options extends MaybeFindFirstAllowedTagOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstAllowedTagOptions>):
    Promise<
      GadgetRecord<
        SelectedAllowedTagOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedAllowedTagOrDefault<Options>>(
      this,
      "allowedTags",
      DefaultAllowedTagSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "allowedTags",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultAllowedTagSelection,
  } as any
);

  
    /**
  * Finds one allowedTag by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
findById: {
  <Options extends FindOneAllowedTagOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneAllowedTagOptions>):
    Promise<
      GadgetRecord<
        SelectedAllowedTagOrDefault<Options>
      >
    >;
  type: "findOne";
  findByVariableName: "id";
  operationName: "allowedTags";
  modelApiIdentifier: "allowedTag";
  defaultSelection: typeof DefaultAllowedTagSelection;
  selectionType: AvailableAllowedTagSelection;
  optionsType: FindOneAllowedTagOptions;
  schemaType: Query["allowedTag"];
} = Object.assign(
  async <Options extends FindOneAllowedTagOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneAllowedTagOptions>):
    Promise<
      GadgetRecordImplementation<
        SelectedAllowedTagOrDefault<Options>
      > & SelectedAllowedTagOrDefault<Options>
    > =>
  {
    return await findOneByFieldRunner<SelectedAllowedTagOrDefault<Options>>(
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
    defaultSelection: DefaultAllowedTagSelection,
  } as any
)

  
    create = Object.assign(createAllowedTag,
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
        type: "CreateAllowedTagInput",
      },
    },
    hasAmbiguousIdentifier: false,
    /** @deprecated -- effects are dead, long live AAC */
    hasCreateOrUpdateEffect: true,
    paramOnlyVariables: [],
    hasReturnType: false,
    acceptsModelInput: true,
  } as unknown as {
    type: "action";
    operationName: "createAllowedTag";
    namespace: null;
    modelApiIdentifier: "allowedTag";
    modelSelectionField: "allowedTag";
    isBulk: false;
    defaultSelection: typeof DefaultAllowedTagSelection;
    selectionType: AvailableAllowedTagSelection;
    optionsType: CreateAllowedTagOptions;
    schemaType:  Query["allowedTag"];

    variablesType: (

      (
        FullyQualifiedCreateAllowedTagVariables          | CreateAllowedTagVariables      )
    ) | undefined;
    variables: {
                    "allowedTag": {
          required: false;
          type: "CreateAllowedTagInput";
        };
          };
    hasAmbiguousIdentifier: false;
    /** @deprecated -- effects are dead, long live AAC */
    hasCreateOrUpdateEffect: true;
    paramOnlyVariables: [];
    hasReturnType: false;
    acceptsModelInput: true;
  }
)

  
      /**
  * Executes the bulkCreate action with the given inputs.
  */
  bulkCreate: {
    <Options extends CreateAllowedTagOptions>(
        inputs: (FullyQualifiedCreateAllowedTagVariables | CreateAllowedTagVariables)[],
      options?: LimitToKnownKeys<Options, CreateAllowedTagOptions>
    ): Promise<CreateAllowedTagResult<Options>[]>;
    type: "action";
    operationName: "bulkCreateAllowedTags";
    namespace: null;
    modelApiIdentifier: "allowedTag";
    modelSelectionField: "allowedTags";
    isBulk: true;
    defaultSelection: typeof DefaultAllowedTagSelection;
    selectionType: AvailableAllowedTagSelection;
    optionsType: CreateAllowedTagOptions;
    schemaType: Query["allowedTag"];
    variablesType: (FullyQualifiedCreateAllowedTagVariables | CreateAllowedTagVariables)[];
    variables: {
        inputs: {
          required: true;
          type: "[BulkCreateAllowedTagsInput!]";
        };
      };
    hasReturnType: boolean;
    acceptsModelInput: boolean;
  } = Object.assign(
    async <Options extends CreateAllowedTagOptions>(
        inputs: (FullyQualifiedCreateAllowedTagVariables | CreateAllowedTagVariables)[],
      options?: LimitToKnownKeys<Options, CreateAllowedTagOptions>
    ) => {
        const fullyQualifiedInputs = inputs.map(input =>
          disambiguateActionParams(
            this["create"],
            undefined,
            input
          )
        );
      
      return (await actionRunner<any>(
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
          }
,
        options,
        null,
        false
      )) as any[];
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
          type: "[BulkCreateAllowedTagsInput!]",
        },
      },
      hasReturnType: false,
      acceptsModelInput: true,
    } as any
  );

  
    update = Object.assign(updateAllowedTag,
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
        type: "GadgetID",
      },
      "allowedTag": {
        required: false,
        type: "UpdateAllowedTagInput",
      },
    },
    hasAmbiguousIdentifier: false,
    /** @deprecated -- effects are dead, long live AAC */
    hasCreateOrUpdateEffect: true,
    paramOnlyVariables: [],
    hasReturnType: false,
    acceptsModelInput: true,
  } as unknown as {
    type: "action";
    operationName: "updateAllowedTag";
    namespace: null;
    modelApiIdentifier: "allowedTag";
    modelSelectionField: "allowedTag";
    isBulk: false;
    defaultSelection: typeof DefaultAllowedTagSelection;
    selectionType: AvailableAllowedTagSelection;
    optionsType: UpdateAllowedTagOptions;
    schemaType:  Query["allowedTag"];

    variablesType: (
        { id: string } &

      (
        FullyQualifiedUpdateAllowedTagVariables          | UpdateAllowedTagVariables      )
    ) | undefined;
    variables: {
              id: {
          required: true;
          type: "GadgetID";
        };
                    "allowedTag": {
          required: false;
          type: "UpdateAllowedTagInput";
        };
          };
    hasAmbiguousIdentifier: false;
    /** @deprecated -- effects are dead, long live AAC */
    hasCreateOrUpdateEffect: true;
    paramOnlyVariables: [];
    hasReturnType: false;
    acceptsModelInput: true;
  }
)

  
      /**
  * Executes the bulkUpdate action with the given inputs.
  */
  bulkUpdate: {
    <Options extends UpdateAllowedTagOptions>(
        inputs: (FullyQualifiedUpdateAllowedTagVariables | UpdateAllowedTagVariables & { id: string })[],
      options?: LimitToKnownKeys<Options, UpdateAllowedTagOptions>
    ): Promise<UpdateAllowedTagResult<Options>[]>;
    type: "action";
    operationName: "bulkUpdateAllowedTags";
    namespace: null;
    modelApiIdentifier: "allowedTag";
    modelSelectionField: "allowedTags";
    isBulk: true;
    defaultSelection: typeof DefaultAllowedTagSelection;
    selectionType: AvailableAllowedTagSelection;
    optionsType: UpdateAllowedTagOptions;
    schemaType: Query["allowedTag"];
    variablesType: (FullyQualifiedUpdateAllowedTagVariables | UpdateAllowedTagVariables & { id: string })[];
    variables: {
        inputs: {
          required: true;
          type: "[BulkUpdateAllowedTagsInput!]";
        };
      };
    hasReturnType: boolean;
    acceptsModelInput: boolean;
  } = Object.assign(
    async <Options extends UpdateAllowedTagOptions>(
        inputs: (FullyQualifiedUpdateAllowedTagVariables | UpdateAllowedTagVariables & { id: string })[],
      options?: LimitToKnownKeys<Options, UpdateAllowedTagOptions>
    ) => {
        const fullyQualifiedInputs = inputs.map(input =>
          disambiguateActionParams(
            this["update"],
            undefined,
            input
          )
        );
      
      return (await actionRunner<any>(
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
          }
,
        options,
        null,
        false
      )) as any[];
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
          type: "[BulkUpdateAllowedTagsInput!]",
        },
      },
      hasReturnType: false,
      acceptsModelInput: true,
    } as any
  );

  
    delete = Object.assign(deleteAllowedTag,
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
        type: "GadgetID",
      },
    },
    hasAmbiguousIdentifier: false,
    /** @deprecated -- effects are dead, long live AAC */
    hasCreateOrUpdateEffect: false,
    paramOnlyVariables: [],
    hasReturnType: false,
    acceptsModelInput: false,
  } as unknown as {
    type: "action";
    operationName: "deleteAllowedTag";
    namespace: null;
    modelApiIdentifier: "allowedTag";
    modelSelectionField: "allowedTag";
    isBulk: false;
    defaultSelection: null;
    selectionType: Record<string, never>;
    optionsType: DeleteAllowedTagOptions;
    schemaType:  null ;

    variablesType: (
        { id: string } &

        {}
    ) | undefined;
    variables: {
              id: {
          required: true;
          type: "GadgetID";
        };
                };
    hasAmbiguousIdentifier: false;
    /** @deprecated -- effects are dead, long live AAC */
    hasCreateOrUpdateEffect: false;
    paramOnlyVariables: [];
    hasReturnType: false;
    acceptsModelInput: false;
  }
)

  
      /**
  * Executes the bulkDelete action with the given inputs. Deletes the records on the server.
  */
  bulkDelete: {
    <Options extends DeleteAllowedTagOptions>(
        ids: string[],
      options?: LimitToKnownKeys<Options, DeleteAllowedTagOptions>
    ): Promise<DeleteAllowedTagResult<Options>[]>;
    type: "action";
    operationName: "bulkDeleteAllowedTags";
    namespace: null;
    modelApiIdentifier: "allowedTag";
    modelSelectionField: "allowedTags";
    isBulk: true;
    defaultSelection: null;
    selectionType: Record<string, never>;
    optionsType: DeleteAllowedTagOptions;
    schemaType: null;
    variablesType: IDsList | undefined;
    variables: {
        ids: {
          required: true;
          type: "[GadgetID!]";
        };
      };
    hasReturnType: boolean;
    acceptsModelInput: boolean;
  } = Object.assign(
    async <Options extends DeleteAllowedTagOptions>(
        ids: string[],
      options?: LimitToKnownKeys<Options, DeleteAllowedTagOptions>
    ) => {

      return (await actionRunner<any>(
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
          }
,
        options,
        null,
        false
      )) as any[];
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
          type: "[GadgetID!]",
        },
      },
      hasReturnType: false,
      acceptsModelInput: false,
    } as any
  );

  
}
