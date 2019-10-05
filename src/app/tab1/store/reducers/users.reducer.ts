import * as usersActions from '../actions/users.actions';

export interface UsersState {
    error: any | null;
    loading: boolean;
    items: any[];
    pagination: any;
}

export const initialState: UsersState = {
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

export function usersListReducer(
    state = initialState,
    action: usersActions.TUsersActions,
): UsersState {
    switch (action.type) {
        case usersActions.LOAD_COLLECTION: {
            return { ...state, loading: true } as UsersState;
        }

        case usersActions.LOAD_COLLECTION_SUCCESS: {
            console.log (({
                ...state,
                loading: false,
                ...(action as usersActions.UserLoadCollectionSuccessAction).payload,
                error: null,
            } as UsersState));
            return ({
                ...state,
                loading: false,
                ...(action as usersActions.UserLoadCollectionSuccessAction).payload,
                error: null,
            } as UsersState);
        }

        case usersActions.LOAD_COLLECTION_FAIL: {
            return ({
                ...state,
                loading: false,
                error: (action as usersActions.UsersLoadCollectionFailAction).error,
            } as UsersState);
        }

        default: {
            return state;
        }
    }
}

export const getLoading = (state: UsersState) => state.loading;
export const getError = (state: UsersState) => state.error;
export const getItems = (state: UsersState) => state.items;
export const getPagination = (state: UsersState) => state.pagination;
