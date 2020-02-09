import { createSelector } from '@ngrx/store';

import * as fromFeature from '@events/core/reducers';
import * as fromFilters from '@events/core/reducers/events-filters.reducer';

export const getFiltersCoreState = createSelector(
    fromFeature.getEventsState,
    (state: fromFeature.EventState) => state.filters,
);

export const getFilters = createSelector(
    getFiltersCoreState,
    fromFilters.getFilters,
);
