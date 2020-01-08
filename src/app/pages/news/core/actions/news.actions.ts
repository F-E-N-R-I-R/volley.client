import { Action } from '@ngrx/store';

export const LOAD_COLLECTION = '[NEWS] Load Collection';
export class NewsLoadCollectionAction implements Action {
    readonly type = LOAD_COLLECTION;
    constructor() {}
}

export const LOAD_COLLECTION_SUCCESS = '[NEWS] Load Collection Success';
export class NewsLoadCollectionSuccessAction implements Action {
    readonly type = LOAD_COLLECTION_SUCCESS;
    constructor(public payload: any) {}
}

export const LOAD_COLLECTION_FAIL = '[NEWS] Load Collection Fail';
export class NewsLoadCollectionFailAction implements Action {
    readonly type = LOAD_COLLECTION_FAIL;
    constructor(public error: Error) {}
}

export type TUsersActions = NewsLoadCollectionAction | NewsLoadCollectionSuccessAction | NewsLoadCollectionFailAction;
