import * as newsItemActions from '@news/core/actions/news-item.actions';
import { NTypes } from '@core/types';

export interface NewsItemState {
    error: any | null;
    loading: boolean;
    item: NTypes.INews;
}

export const initialState: NewsItemState = {
    error: null,
    item: null,
    loading: false,
};

export function newsItemReducer(
    state = initialState,
    action: newsItemActions.TNewsItemActions,
): NewsItemState {
    switch (action.type) {
        case newsItemActions.CREATE_ITEM:
        case newsItemActions.GET_ITEM:
        case newsItemActions.UPDATE_ITEM:
        case newsItemActions.DELETE_ITEM: {
            return { ...state, loading: true } as NewsItemState;
        }

        case newsItemActions.GET_ITEM_SUCCESS:
        case newsItemActions.CREATE_ITEM_SUCCESS:
        case newsItemActions.UPDATE_ITEM_SUCCESS:
        case newsItemActions.DELETE_ITEM_SUCCESS: {
            return ({
                ...state,
                loading: false,
                item: {
                    ...state.item,
                    ...(action as newsItemActions.NewsCreateItemSuccessAction).payload,
                },
                error: null,
            } as NewsItemState);
        }

        case newsItemActions.GET_ITEM_FAIL:
        case newsItemActions.CREATE_ITEM_FAIL:
        case newsItemActions.UPDATE_ITEM_FAIL:
        case newsItemActions.DELETE_ITEM_FAIL: {
            return ({
                ...state,
                loading: false,
                error: (action as newsItemActions.NewsCreateItemFailAction).error,
            } as NewsItemState);
        }

        default: {
            return state;
        }
    }
}

export const getLoading = (state: NewsItemState) => state.loading;
export const getError = (state: NewsItemState) => state.error;
export const getItem = (state: NewsItemState) => state.item;
