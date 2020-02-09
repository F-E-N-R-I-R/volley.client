import { createSelector } from '@ngrx/store';

import * as fromFeature from '@news/core/reducers';
import * as fromFilters from '@news/core/reducers/news-filters.reducer';

export const getFiltersCoreState = createSelector(
    fromFeature.getFiltersState,
    (state: fromFeature.NewState) => state.filters,
);

export const getFilters = createSelector(
    getFiltersCoreState,
    fromFilters.getFilters,
);
