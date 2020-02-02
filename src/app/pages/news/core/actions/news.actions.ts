import { Action } from '@ngrx/store';
import { NTypes } from '@core/types';

export const LOAD_COLLECTION = '[NEWS] Load Collection';
export class NewsLoadCollectionAction implements Action {
    readonly type = LOAD_COLLECTION;
    constructor(public payload: NTypes.IFilters) {}
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

export type TNewsActions = NewsLoadCollectionAction | NewsLoadCollectionSuccessAction | NewsLoadCollectionFailAction;
