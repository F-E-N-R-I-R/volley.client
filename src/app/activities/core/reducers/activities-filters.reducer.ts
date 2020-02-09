import * as filtersActions from '@activities/core/actions/activities-filters.actions';
import { ATypes } from '@core/types';

export interface FiltersState {
    filters: ATypes.IActivityFilter;
}

export const initialState: FiltersState = {
    filters: {
        categories: {
            fivb: true,
            fvu: true,
            fvho: true,
            teams: true,
            places: true,
            events: true,
        },
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
                filters: (action as filtersActions.FilterUpdateAction).filters,
            } as FiltersState;
        }

        default: {
            return state;
        }
    }
}

export const getFilters = (state: FiltersState) => state.filters;
