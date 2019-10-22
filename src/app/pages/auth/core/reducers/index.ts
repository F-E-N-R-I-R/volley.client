import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { UserState, userReducer } from './auth.user.reducer';

export interface UState {
    list: UserState;
}

export const reducers: ActionReducerMap<UState> = {
    list: userReducer,
};

export const getUserState = createFeatureSelector<UState>('user');
