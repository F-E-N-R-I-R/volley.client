import { createSelector } from '@ngrx/store';

import * as fromFeature from '@teams/core/reducers';
import * as fromTeams from '@teams/core/reducers/teams.reducer';

export const getCompleteCoreState = createSelector(
    fromFeature.getTeamsState,
    (state: fromFeature.NewState) => state.list,
);

export const getListPagination = createSelector(
    getCompleteCoreState,
    fromTeams.getPagination,
);

export const getListItems = createSelector(
    getCompleteCoreState,
    fromTeams.getItems,
);

export const getListPending = createSelector(
    getCompleteCoreState,
    fromTeams.getLoading,
);

export const getListError = createSelector(
    getCompleteCoreState,
    fromTeams.getError,
);
