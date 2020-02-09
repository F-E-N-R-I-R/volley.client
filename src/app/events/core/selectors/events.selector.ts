import { createSelector } from '@ngrx/store';

import * as fromFeature from '@events/core/reducers';
import * as fromEvents from '@events/core/reducers/events.reducer';

export const getCompleteCoreState = createSelector(
    fromFeature.getEventsState,
    (state: fromFeature.EventState) => state.list,
);

export const getListPagination = createSelector(
    getCompleteCoreState,
    fromEvents.getPagination,
);

export const getListItems = createSelector(
    getCompleteCoreState,
    fromEvents.getItems,
);

export const getListPending = createSelector(
    getCompleteCoreState,
    fromEvents.getLoading,
);

export const getListError = createSelector(
    getCompleteCoreState,
    fromEvents.getError,
);
