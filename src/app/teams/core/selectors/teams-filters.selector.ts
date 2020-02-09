import { createSelector } from '@ngrx/store';

import * as fromFeature from '@teams/core/reducers';
import * as fromFilters from '@teams/core/reducers/teams-filters.reducer';

export const getFiltersCoreState = createSelector(
    fromFeature.getFiltersState,
    (state: fromFeature.NewState) => state.filters,
);

export const getFilters = createSelector(
    getFiltersCoreState,
    fromFilters.getFilters,
);
