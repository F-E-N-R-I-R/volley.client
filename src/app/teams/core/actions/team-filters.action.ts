import { Action } from '@ngrx/store';
import { TTypes } from '@core/types';

export const UPDATE_FILTERS = '[TEAMS] Filters update';
export class FilterUpdateAction implements Action {
    readonly type = UPDATE_FILTERS;
    constructor(public filters: TTypes.ITeamFilter) {
    }
}
export type TFiltersActions = FilterUpdateAction;
