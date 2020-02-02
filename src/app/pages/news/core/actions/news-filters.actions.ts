import { Action } from '@ngrx/store';
import { NTypes } from '@core/types';

export const UPDATE_FILTERS = '[NEWS] Filters Update';
export class FiltersUpdateAction implements Action {
    readonly type = UPDATE_FILTERS;
    constructor(public payload: NTypes.IFilters) {
    }
}

export type TFiltersActions = FiltersUpdateAction;
