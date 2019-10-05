import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromUser from '../reducers/users.reducer';

export const getCompleteCoreState = createSelector(
    fromFeature.getUsersState,
    (state: fromFeature.UserState) => state.list,
);

export const getListPagination = createSelector(
    getCompleteCoreState,
    fromUser.getPagination,
);

export const getListItems = createSelector(
    getCompleteCoreState,
    fromUser.getItems,
);

export const getListPending = createSelector(
    getCompleteCoreState,
    fromUser.getLoading,
);

export const getListError = createSelector(
    getCompleteCoreState,
    fromUser.getError,
);
