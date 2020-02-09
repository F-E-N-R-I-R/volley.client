import { Action } from '@ngrx/store';
import { TTypes } from '@core/types';

export const GET_LIST = '[TEAMS] Get List';
export class GetListAction implements Action {
    readonly type = GET_LIST;

    constructor(public filters: TTypes.ITeamFilter) {
    }
}
export const GET_LIST_SUCCESS = '[TEAMS] Get List Success';

export class GetListSuccessAction implements Action {
    readonly type = GET_LIST_SUCCESS;

    constructor(public payload: TTypes.ITeamsList) {
    }
}
export const GET_LIST_FAIL = '[TEAMS] Get List Fail';

export class GetListFailAction implements Action {
    readonly type = GET_LIST_FAIL;
    constructor(public error: Error) {
    }
}
export type TTeamsActions = GetListAction
    | GetListSuccessAction
    | GetListFailAction;
