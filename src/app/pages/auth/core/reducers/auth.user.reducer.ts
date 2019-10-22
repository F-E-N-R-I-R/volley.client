import * as userActions from '../actions/auth.user.actions';

export interface UserState {
    error: any | null;
    loading: boolean;
    user: any;
    pagination: any;
}

export const initialState: UserState = {
    error: null,
    user: {},
    pagination: {
        current_page: 1,
        per_page: 10,
        total_count: 0,
        total_pages: 1,
    },
    loading: false,
};

export function userReducer(
    state = initialState,
    action: userActions.TUserActions,
): UserState {
    switch (action.type) {
        case userActions.LOGIN: {
            return { ...state, loading: true } as UserState;
        }

        case userActions.LOGIN_COMPLETED: {
            return ({
                ...state,
                loading: false,
                ...(action as userActions.UserLoginSuccessAction).payload,
                error: null,
            } as UserState);
        }

        case userActions.LOGIN_FAILED: {
            return ({
                ...state,
                loading: false,
                error: (action as userActions.UserLoginFailAction).error,
            } as UserState);
        }

        /*case userActions.LOGOUT: {
            return ({
                ...state,
                loading: false,
                ...(action as userActions.UserLogoutAction).payload,
                error: null,
            } as UserState);
        }

        case userActions.LOGOUT_SUCCESS: {
            return { ...state, loading: true } as UserState;
        }

        case userActions.LOGOUT_FAILED: {
            return ({
                ...state,
                loading: false,
                error: (action as userActions.UserLogoutFailAction).error,
            } as UserState);
        }*/

        default: {
            return state;
        }
    }
}

export const getLoading = (state: UserState) => state.loading;
export const getError = (state: UserState) => state.error;
export const getUser = (state: UserState) => state.user;
export const getPagination = (state: UserState) => state.pagination;
