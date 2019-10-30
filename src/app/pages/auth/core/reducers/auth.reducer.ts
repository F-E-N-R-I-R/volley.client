import * as authActions from '../actions/auth.actions';

export interface AuthState {
    error: any | null;
    loading: boolean;
    user: any;
}

export const initialState: AuthState = {
    error: null,
    user: null,
    loading: false,
};

export function authReducer(
    state = initialState,
    action: authActions.TAuthActions,
): AuthState {
    switch (action.type) {
        case authActions.UPDATE_USER:
        case authActions.LOGIN:
        case authActions.LOGOUT: {
            return { ...state, loading: true } as AuthState;
        }

        case authActions.LOGOUT_SUCCESS: {
            return ({
                ...state,
                loading: false,
                user: null,
                error: null,
            } as AuthState);
        }

        case authActions.UPDATE_USER_SUCCESS:
        case authActions.LOGIN_SUCCESS: {
            return ({
                ...state,
                loading: false,
                user: (action as authActions.AuthLoginSuccessAction).payload,
                error: null,
            } as AuthState);
        }

        case authActions.UPDATE_USER_FAIL:
        case authActions.LOGOUT_FAIL:
        case authActions.LOGIN_FAIL: {
            return ({
                ...state,
                loading: false,
                error: (action as authActions.AuthLoginFailAction).error,
            } as AuthState);
        }

        default: {
            return state;
        }
    }
}

export const getLoading = (state: AuthState) => state.loading;
export const getError = (state: AuthState) => state.error;
export const getUser = (state: AuthState) => state.user;
