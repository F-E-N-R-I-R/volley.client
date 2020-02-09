import { Action } from '@ngrx/store';
import { ATypes } from '@core/types';

export const GET_LIST = '[ACTIVITIES] Get list';

export class GetListAction implements Action {
    readonly type = GET_LIST;

    constructor(public filters: ATypes.IActivityFilter) {
    }
}

export const GET_LIST_SUCCESS = '[ACTIVITIES] Get List Success';

export class GetListSuccessAction implements Action {
    readonly type = GET_LIST_SUCCESS;

    constructor(public payload: ATypes.IActivityList) {
    }
}

export const GET_LIST_FAIL = '[ACTIVITIES] Get List Fail';

export class GetListFailAction implements Action {
    readonly type = GET_LIST_FAIL;

    constructor(public error: Error) {
    }
}

export type TActivitiesActions = GetListAction
    | GetListSuccessAction
    | GetListFailAction;
