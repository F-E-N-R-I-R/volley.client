import { Action } from '@ngrx/store';
import { ETypes } from '@core/types';

export const UPDATE_FILTERS = '[EVENTS] Filters Update';

export class FiltersUpdateAction implements Action {
    readonly type = UPDATE_FILTERS;

    constructor(public payload: ETypes.IEventsFilters) {
    }
}

export type TFiltersActions = FiltersUpdateAction;
