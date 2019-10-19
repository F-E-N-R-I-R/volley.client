import { Action } from '@ngrx/store';

export const LOAD_COLLECTION = '[USERS] Load Collection';
export class UsersLoadCollectionAction implements Action {
    readonly type = LOAD_COLLECTION;
    constructor() {}
}

export const LOAD_COLLECTION_SUCCESS = '[USERS] Load Collection Success';
export class UserLoadCollectionSuccessAction implements Action {
    readonly type = LOAD_COLLECTION_SUCCESS;
    constructor(public payload: any) {}
}

export const LOAD_COLLECTION_FAIL = '[USERS] Load Collection Fail';
export class UsersLoadCollectionFailAction implements Action {
    readonly type = LOAD_COLLECTION_FAIL;
    constructor(public error: Error) {}
}

export type TUsersActions = UsersLoadCollectionAction | UserLoadCollectionSuccessAction | UsersLoadCollectionFailAction;
