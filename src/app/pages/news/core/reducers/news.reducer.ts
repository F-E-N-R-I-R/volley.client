import * as newsActions from '@news/core/actions/news.actions';

export interface NewsState {
    error: any | null;
    loading: boolean;
    items: any[];
    // pagination: any;
}

export const initialState: NewsState = {
    error: null,
    items: [],
    // pagination: {
    //     current_page: 1,
    //     per_page: 10,
    //     total_count: 0,
    //     total_pages: 1,
    // },
    loading: false,
};

export function newsListReducer(
    state = initialState,
    action: newsActions.TUsersActions,
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

        default: {
            return state;
        }
    }
}

export const getLoading = (state: NewsState) => state.loading;
export const getError = (state: NewsState) => state.error;
export const getItems = (state: NewsState) => state.items;
// export const getPagination = (state: NewsState) => state.pagination;
