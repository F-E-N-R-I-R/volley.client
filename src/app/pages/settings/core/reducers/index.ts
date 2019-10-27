import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { SettingsState, settingsReducer } from './settings.reducer';

export interface SettingState {
    settings: SettingsState;
}

export const reducers: ActionReducerMap<SettingState> = {
    settings: settingsReducer,
};

export const getSettingsState = createFeatureSelector<SettingState>('settings');
