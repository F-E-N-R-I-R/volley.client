import * as filtersActions from '@events/core/actions/events-filters.actions';
import { ETypes } from '@core/types';

export interface FiltersState {
    filters: ETypes.IEventsFilters;
}

export const initialState: FiltersState = {
    filters: {
       page: 1,
    },
};

export function filtersReducer(
    state = initialState,
    action: filtersActions.TFiltersActions,
): FiltersState {
    switch (action.type) {
        case filtersActions.UPDATE_FILTERS: {
            return {
                ...state,
                filters: (action as filtersActions.FiltersUpdateAction).payload,
            } as FiltersState;
        }

        default: {
            return state;
        }
    }
}

export const getFilters = (state: FiltersState) => state.filters;
