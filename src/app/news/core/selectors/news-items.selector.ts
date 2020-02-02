import { createSelector } from '@ngrx/store';

import * as fromFeature from '@news/core/reducers';
import * as fromItem from '@news/core/reducers/news-item.reducer';

export const getItemCoreState = createSelector(
    fromFeature.getItemState,
    (state: fromFeature.NewState) => state.item,
);

export const getItem = createSelector(
    getItemCoreState,
    fromItem.getItem,
);
