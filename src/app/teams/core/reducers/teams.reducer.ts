import * as teamsActions from '@teams/core/actions/teams.actions';
import { TTypes } from '@core/types';

export interface TeamsState {
    error: any | null;
    loading: boolean;
    items: TTypes.ITeam[];
    pagination: any;
}

export const initialState: TeamsState = {
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

export function teamsListReducer(
    state = initialState,
    action: teamsActions.TTeamsActions
): TeamsState {
    switch (action.type) {
        case teamsActions.GET_LIST: {
            return { ...state, loading: true } as TeamsState;
        }

        case teamsActions.GET_LIST_SUCCESS: {
            return ({
                ...state,
                loading: false,
                ...(action as teamsActions.GetListSuccessAction).payload,
                error: null,
            } as TeamsState);
        }

        case teamsActions.GET_LIST_FAIL: {
            return ({
                ...state,
                loading: false,
                error: (action as teamsActions.GetListFailAction).error,
            } as TeamsState);
        }

        default: {
            return state;
        }
    }
}

export const getLoading = (state: TeamsState) => state.loading;
export const getError = (state: TeamsState) => state.error;
export const getItems = (state: TeamsState) => state.items;
export const getPagination = (state: TeamsState) => state.pagination;
