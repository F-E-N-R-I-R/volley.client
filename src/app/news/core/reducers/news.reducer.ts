import * as newsActions from '@news/core/actions/news.actions';
import * as newsItemActions from '@news/core/actions/news-item.actions';
import { NewsItemState } from '@news/core/reducers/news-item.reducer';
import { TNewsItemActions } from '@news/core/actions/news-item.actions';
import { NTypes } from '@core/types';

export interface NewsState {
    error: any | null;
    loading: boolean;
    items: any[];
    pagination: any;
}

export const initialState: NewsState = {
    error: null,
    items: [],
    pagination: {
        current_page: 1,
        per_page: 10,
        total_count: 0,
        total_pages: 1,
    },
    loading: false,
};

export function newsListReducer(
    state = initialState,
    action: newsActions.TNewsActions | TNewsItemActions,
): NewsState {
    switch (action.type) {
        case newsActions.LOAD_COLLECTION: {
            return { ...state, loading: true } as NewsState;
        }

        case newsActions.LOAD_COLLECTION_SUCCESS: {
            return ({
                ...state,
                loading: false,
                ...(action as newsActions.NewsLoadCollectionSuccessAction).payload,
                error: null,
            } as NewsState);
        }

        case newsActions.LOAD_COLLECTION_FAIL: {
            return ({
                ...state,
                loading: false,
                error: (action as newsActions.NewsLoadCollectionFailAction).error,
            } as NewsState);
        }

        case newsItemActions.DELETE_ITEM_SUCCESS: {
            const news: NTypes.INews = (action as newsItemActions.NewsDeleteItemSuccessAction).payload;
            return ({
                ...state,
                items: state.items.filter(({ id }) => id !== news.id),
                loading: false,
                error: null,
            } as NewsState);
        }

        case newsItemActions.CREATE_ITEM_SUCCESS: {
            return ({
                ...state,
                items: [(action as newsItemActions.NewsCreateItemSuccessAction).payload, ...state.items],
                loading: false,
                error: null,
            } as NewsState);
        }

        case newsItemActions.UPDATE_ITEM_SUCCESS: {
            const news: NTypes.INews = (action as newsItemActions.NewsUpdateItemSuccessAction).payload;
            return ({
                ...state,
                items: state.items.map((item) => item.id === news.id ? news : item),
                loading: false,
                error: null,
            } as NewsState);
        }

        default: {
            return state;
        }
    }
}

export const getLoading = (state: NewsState) => state.loading;
export const getError = (state: NewsState) => state.error;
export const getItems = (state: NewsState) => state.items;
export const getPagination = (state: NewsState) => state.pagination;
