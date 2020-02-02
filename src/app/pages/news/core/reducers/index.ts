import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { NewsState, newsListReducer } from '@news/core/reducers/news.reducer';
import { FiltersState, filtersReducer } from '@news/core/reducers/news-filters.reducer';
import { newsItemReducer, NewsItemState } from '@news/core/reducers/news-item.reducer';

export interface NewState {
    list: NewsState;
    filters: FiltersState;
    item: NewsItemState;
}

export const reducers: ActionReducerMap<NewState> = {
    list: newsListReducer,
    filters: filtersReducer,
    item: newsItemReducer,
};

export const getNewsState = createFeatureSelector<NewState>('newsList');
export const getFiltersState = createFeatureSelector<NewState>('filters');
export const getItemState = createFeatureSelector<NewState>('item');
