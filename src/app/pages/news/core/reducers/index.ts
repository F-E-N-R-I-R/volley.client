import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { NewsState, newsListReducer } from '@news/core/reducers/news.reducer';
import { FiltersState, filtersReducer } from '@news/core/reducers/news-filters.reducer';

export interface NewState {
    list: NewsState;
    filters: FiltersState;
}

export const reducers: ActionReducerMap<NewState> = {
    list: newsListReducer,
    filters: filtersReducer,
};

export const getNewsState = createFeatureSelector<NewState>('new');
export const getFiltersState = createFeatureSelector<NewState>('filters');
