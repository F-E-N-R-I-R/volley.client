import { Action } from '@ngrx/store';
import { ATypes } from '@core/types';

export const UPDATE_FILTERS = '[ACTIVITIES] Filter update';

export class FilterUpdateAction implements Action {
    readonly type = UPDATE_FILTERS;

    constructor(public filters: ATypes.IActivityFilter) {
    }
}

export type TFiltersActions = FilterUpdateAction;
