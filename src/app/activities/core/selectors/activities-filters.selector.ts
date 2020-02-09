import { createSelector } from '@ngrx/store';

import * as fromFeature from '@activities/core/reducers';
import * as fromFilters from '@activities/core/reducers/activities-filters.reducer';

export const getFiltersCoreState = createSelector(
    fromFeature.getActivitiesState,
    (state: fromFeature.ActivityState) => state.filters,
);

export const getFilters = createSelector(
    getFiltersCoreState,
    fromFilters.getFilters,
);
