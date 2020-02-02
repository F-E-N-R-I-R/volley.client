import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { AuthState, authReducer } from '@auth/core/reducers/auth.reducer';

export interface AuthorizationState {
    auth: AuthState;
}

export const reducers: ActionReducerMap<AuthorizationState> = {
    auth: authReducer,
};

export const getUsersState = createFeatureSelector<AuthorizationState>('auth');
