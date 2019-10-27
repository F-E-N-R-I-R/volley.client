import * as settingsActions from '../actions/settings.actions';

export interface SettingsState {
    error: any | null;
    loading: boolean;
    settings: any[];
}

export const initialState: SettingsState = {
    error: null,
    settings: [],
    loading: false,
};

export function settingsReducer(
    state = initialState,
    action: settingsActions.TSettingsActions,
): SettingsState {
    switch (action.type) {
        case settingsActions.LOAD_SETTINGS: {
            return { ...state, loading: true } as SettingsState;
        }

        case settingsActions.LOAD_SETTINGS_SUCCESS: {
            return ({
                ...state,
                loading: false,
                ...(action as settingsActions.SettingsLoadSuccessAction).payload,
                error: null,
            } as SettingsState);
        }

        case settingsActions.LOAD_SETTINGS_FAIL: {
            return ({
                ...state,
                loading: false,
                error: (action as settingsActions.SettingsLoadFailAction).error,
            } as SettingsState);
        }

        default: {
            return state;
        }
    }
}

export const getLoading = (state: SettingsState) => state.loading;
export const getError = (state: SettingsState) => state.error;
export const getSettings = (state: SettingsState) => state.settings;
