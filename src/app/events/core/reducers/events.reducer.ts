import * as eventsActions from '@events/core/actions/events.actions';
import { ETypes } from '@core/types';

export interface IEventsState {
    error: any | null;
    loading: boolean;
    items: ETypes.IEvent[];
    pagination: any;
}

export const initialState: IEventsState = {
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

export function eventsListReducer(
    state = initialState,
    action: eventsActions.TEventsActions,
): IEventsState {
    switch (action.type) {
        case eventsActions.GET_LIST: {
            return { ...state, loading: true } as IEventsState;
        }

        case eventsActions.GET_LIST_SUCCESS: {
            return ({
                ...state,
                loading: false,
                ...(action as eventsActions.GetListSuccessAction).payload,
                error: null,
            } as IEventsState);
        }

        case eventsActions.GET_LIST_FAIL: {
            return ({
                ...state,
                loading: false,
                error: (action as eventsActions.GetListFailAction).error,
            } as IEventsState);
        }

        default: {
            return state;
        }
    }
}

export const getLoading = (state: IEventsState) => state.loading;
export const getError = (state: IEventsState) => state.error;
export const getItems = (state: IEventsState) => state.items;
export const getPagination = (state: IEventsState) => state.pagination;
