import * as filtersActions from '@news/core/actions/news-filters.actions';
import { NTypes } from '@core/types';

export interface FiltersState {
    filters: NTypes.IFilters;
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
                filters: (action as filtersActions.FiltersUpdateAction).payload,
            } as FiltersState;
        }

        default: {
            return state;
        }
    }
}

export const getFilters = (state: FiltersState) => state.filters;
