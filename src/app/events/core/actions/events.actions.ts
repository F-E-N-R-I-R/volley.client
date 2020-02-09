import { Action } from '@ngrx/store';
import { ETypes } from '@core/types';

export const GET_LIST = '[EVENTS] Get List';

export class GetListAction implements Action {
    readonly type = GET_LIST;

    constructor(public payload: ETypes.IEventsFilters) {
    }
}

export const GET_LIST_SUCCESS = '[EVENTS] Get List Success';

export class GetListSuccessAction implements Action {
    readonly type = GET_LIST_SUCCESS;

    constructor(public payload: ETypes.IEventsList) {
    }
}

export const GET_LIST_FAIL = '[EVENTS] Get List Fail';

export class GetListFailAction implements Action {
    readonly type = GET_LIST_FAIL;

    constructor(public error: Error) {
    }
}

export type TEventsActions = GetListAction | GetListSuccessAction | GetListFailAction;
