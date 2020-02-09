import * as activitiesActions from '@activities/core/actions/activities.actions';
import { ATypes } from '@core/types';

export interface IActivitiesState {
    error: any | null;
    loading: boolean;
    items: ATypes.IActivity[];
    pagination: any;
}

export const initialState: IActivitiesState = {
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

export function activitiesListReducer(
    state = initialState,
    action: activitiesActions.TActivitiesActions,
): IActivitiesState {
    switch (action.type) {
        case activitiesActions.GET_LIST: {
            return { ...state, loading: true } as IActivitiesState;
        }

        case activitiesActions.GET_LIST_SUCCESS: {
            return ({
                ...state,
                loading: false,
                ...(action as activitiesActions.GetListSuccessAction).payload,
                error: null,
            } as IActivitiesState);
        }

        case activitiesActions.GET_LIST_FAIL: {
            return ({
                ...state,
                loading: false,
                error: (action as activitiesActions.GetListFailAction).error,
            } as IActivitiesState);
        }


        default: {
            return state;
        }
    }
}

export const getLoading = (state: IActivitiesState) => state.loading;
export const getError = (state: IActivitiesState) => state.error;
export const getItems = (state: IActivitiesState) => state.items;
export const getPagination = (state: IActivitiesState) => state.pagination;
