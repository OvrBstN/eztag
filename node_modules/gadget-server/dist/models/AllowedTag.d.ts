import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ActionTrigger } from "../types";
import { GadgetRecord, AllowedTag } from "@gadget-client/eztag";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultAllowedTagServerSelection = {
    readonly __typename: true;
    readonly id: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly keyword: true;
    readonly shopId: true;
    readonly shop: false;
};
/** All the data passed to an effect or precondition within the `create` action on the `allowedTag` model. */
export interface CreateAllowedTagActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `allowedTag` record this action is operating on.
    */
    record: GadgetRecord<Select<AllowedTag, DefaultAllowedTagServerSelection>>;
    /**
    * An object passed between all preconditions and effects of an action execution at the `scope` property.
    * Useful for transferring data between effects.
    */
    scope: ActionExecutionScope;
    /**
    * An object describing what started this action execution.
    */
    trigger: ActionTrigger;
    /**
    * An object containing all the incoming params that have been defined for this action. Includes params added by any triggers, as well as custom params defined in the action.
    */
    params: {};
    /**
    * The context of this action. This context does not have a defined inner context.
    */
    context: CreateAllowedTagActionContext;
}
/** All the data passed to an effect or precondition within the `update` action on the `allowedTag` model. */
export interface UpdateAllowedTagActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `allowedTag` record this action is operating on.
    */
    record: GadgetRecord<Select<AllowedTag, DefaultAllowedTagServerSelection>>;
    /**
    * An object passed between all preconditions and effects of an action execution at the `scope` property.
    * Useful for transferring data between effects.
    */
    scope: ActionExecutionScope;
    /**
    * An object describing what started this action execution.
    */
    trigger: ActionTrigger;
    /**
    * An object containing all the incoming params that have been defined for this action. Includes params added by any triggers, as well as custom params defined in the action.
    */
    params: {};
    /**
    * The context of this action. This context does not have a defined inner context.
    */
    context: UpdateAllowedTagActionContext;
}
/** All the data passed to an effect or precondition within the `delete` action on the `allowedTag` model. */
export interface DeleteAllowedTagActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `allowedTag` record this action is operating on.
    */
    record: GadgetRecord<Select<AllowedTag, DefaultAllowedTagServerSelection>>;
    /**
    * An object passed between all preconditions and effects of an action execution at the `scope` property.
    * Useful for transferring data between effects.
    */
    scope: ActionExecutionScope;
    /**
    * An object describing what started this action execution.
    */
    trigger: ActionTrigger;
    /**
    * An object containing all the incoming params that have been defined for this action. Includes params added by any triggers, as well as custom params defined in the action.
    */
    params: {};
    /**
    * The context of this action. This context does not have a defined inner context.
    */
    context: DeleteAllowedTagActionContext;
}
