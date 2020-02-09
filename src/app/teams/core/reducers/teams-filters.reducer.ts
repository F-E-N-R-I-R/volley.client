import * as filtersActions from '@teams/core/actions/team-filters.action';
import { TTypes } from '@core/types';

export interface FiltersState {
    filters: TTypes.ITeamFilter;
}

export const initialState: FiltersState = {
    filters: {
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
