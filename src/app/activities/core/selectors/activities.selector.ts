import { createSelector } from '@ngrx/store';

import * as fromFeature from '@activities/core/reducers';
import * as fromActivities from '@activities/core/reducers/activities.reducer';

export const getCompleteCoreState = createSelector(
    fromFeature.getActivitiesState,
    (state: fromFeature.ActivityState) => state.list,
);

export const getListPagination = createSelector(
    getCompleteCoreState,
    fromActivities.getPagination,
);

export const getListItems = createSelector(
    getCompleteCoreState,
    fromActivities.getItems,
);

export const getListPending = createSelector(
    getCompleteCoreState,
    fromActivities.getLoading,
);

export const getListError = createSelector(
    getCompleteCoreState,
    fromActivities.getError,
);
