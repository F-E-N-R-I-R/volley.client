import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { NewsState, newsListReducer } from '@news/core/reducers/news.reducer';

export interface NewState {
    list: NewsState;
}

export const reducers: ActionReducerMap<NewState> = {
    list: newsListReducer,
};

export const getNewsState = createFeatureSelector<NewState>('new');
