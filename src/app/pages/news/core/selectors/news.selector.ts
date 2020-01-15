import { createSelector } from '@ngrx/store';

import * as fromFeature from '@news/core/reducers';
import * as fromUser from '@news/core/reducers/news.reducer';

export const getCompleteCoreState = createSelector(
    fromFeature.getNewsState,
    (state: fromFeature.NewState) => state.list,
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
