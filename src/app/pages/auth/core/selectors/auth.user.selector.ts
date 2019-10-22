import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromUser from '../reducers/auth.user.reducer';

export const getCompleteCoreState = createSelector(
    fromFeature.getUserState,
    (state: fromFeature.UState) => state.list,
);

export const getListPagination = createSelector(
    getCompleteCoreState,
    fromUser.getPagination,
);

export const getListItems = createSelector(
    getCompleteCoreState,
    fromUser.getUser,
);

export const getListPending = createSelector(
    getCompleteCoreState,
    fromUser.getLoading,
);

export const getListError = createSelector(
    getCompleteCoreState,
    fromUser.getError,
);
