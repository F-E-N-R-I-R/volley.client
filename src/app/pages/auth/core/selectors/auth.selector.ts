import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromUser from '../reducers/auth.reducer';

export const getCompleteCoreState = createSelector(
    fromFeature.getUsersState,
    (state: fromFeature.AuthorizationState) => state.auth,
);

export const getUser = createSelector(
    getCompleteCoreState,
    fromUser.getUser,
);

export const getPending = createSelector(
    getCompleteCoreState,
    fromUser.getLoading,
);

export const getError = createSelector(
    getCompleteCoreState,
    fromUser.getError,
);
