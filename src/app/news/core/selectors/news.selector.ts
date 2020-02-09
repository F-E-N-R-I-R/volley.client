import { createSelector } from '@ngrx/store';

import * as fromFeature from '@news/core/reducers';
import * as fromNews from '@news/core/reducers/news.reducer';

export const getCompleteCoreState = createSelector(
    fromFeature.getNewsState,
    (state: fromFeature.NewState) => state.list,
);

export const getListPagination = createSelector(
    getCompleteCoreState,
    fromNews.getPagination,
);

export const getListItems = createSelector(
    getCompleteCoreState,
    fromNews.getItems,
);

export const getListPending = createSelector(
    getCompleteCoreState,
    fromNews.getLoading,
);

export const getListError = createSelector(
    getCompleteCoreState,
    fromNews.getError,
);
