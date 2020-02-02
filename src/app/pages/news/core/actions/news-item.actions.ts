import { Action } from '@ngrx/store';
import { NTypes } from '@core/types';

export const GET_ITEM = '[NEWS] Item Get';

export class NewsGetItemAction implements Action {
    readonly type = GET_ITEM;

    constructor(public payload: NTypes.INews) {
    }
}

export const GET_ITEM_SUCCESS = '[News] Item Get Success';

export class NewsGetItemSuccessAction implements Action {
    readonly type = GET_ITEM_SUCCESS;

    constructor(public payload: NTypes.INews) {
    }
}

export const GET_ITEM_FAIL = '[News] Item Get Fail';

export class NewsGetItemFailAction implements Action {
    readonly type = GET_ITEM_FAIL;

    constructor(public error: Error) {
    }
}

export const UPDATE_ITEM = '[NEWS] Item Update';

export class NewsUpdateItemAction implements Action {
    readonly type = UPDATE_ITEM;

    constructor(public payload: NTypes.INews) {
    }
}

export const UPDATE_ITEM_SUCCESS = '[News] Item Update Success';

export class NewsUpdateItemSuccessAction implements Action {
    readonly type = UPDATE_ITEM_SUCCESS;

    constructor(public payload: NTypes.INews) {
    }
}

export const UPDATE_ITEM_FAIL = '[News] Item Update Fail';

export class NewsUpdateItemFailAction implements Action {
    readonly type = UPDATE_ITEM_FAIL;

    constructor(public error: Error) {
    }
}

export const CREATE_ITEM = '[NEWS] Item Create';

export class NewsCreateItemAction implements Action {
    readonly type = CREATE_ITEM;

    constructor(public payload: NTypes.INews) {
    }
}

export const CREATE_ITEM_SUCCESS = '[News] Item Create Success';

export class NewsCreateItemSuccessAction implements Action {
    readonly type = CREATE_ITEM_SUCCESS;

    constructor(public payload: NTypes.INews) {
    }
}

export const CREATE_ITEM_FAIL = '[News] Item Create Fail';

export class NewsCreateItemFailAction implements Action {
    readonly type = CREATE_ITEM_FAIL;

    constructor(public error: Error) {
    }
}

export const DELETE_ITEM = '[NEWS] Item Delete';

export class NewsDeleteItemAction implements Action {
    readonly type = DELETE_ITEM;

    constructor(public payload: NTypes.INews) {
    }
}

export const DELETE_ITEM_SUCCESS = '[News] Item Delete Success';

export class NewsDeleteItemSuccessAction implements Action {
    readonly type = DELETE_ITEM_SUCCESS;

    constructor(public payload: NTypes.INews) {
    }
}

export const DELETE_ITEM_FAIL = '[News] Item Delete Fail';

export class NewsDeleteItemFailAction implements Action {
    readonly type = DELETE_ITEM_FAIL;

    constructor(public error: Error) {
    }
}

export type TNewsItemActions = NewsUpdateItemAction
    | NewsUpdateItemSuccessAction
    | NewsUpdateItemFailAction
    | NewsCreateItemAction
    | NewsCreateItemSuccessAction
    | NewsCreateItemFailAction
    | NewsDeleteItemAction
    | NewsDeleteItemSuccessAction
    | NewsDeleteItemFailAction
    | NewsGetItemAction
    | NewsGetItemFailAction
    | NewsGetItemSuccessAction;
