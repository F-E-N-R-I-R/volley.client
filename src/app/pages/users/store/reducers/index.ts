import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { UsersState, usersListReducer } from './users.reducer';

export interface UserState {
    list: UsersState;
}

export const reducers: ActionReducerMap<UserState> = {
    list: usersListReducer,
};

export const getUsersState = createFeatureSelector<UserState>('user');
