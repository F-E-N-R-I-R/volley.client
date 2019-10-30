import { Action } from '@ngrx/store';

export const SAVE_SETTINGS = '[USER_SETTINGS] Save Settings';
export class SettingsSaveAction implements Action {
    readonly type = SAVE_SETTINGS;
    constructor(public payload: any) {}
}

export const SAVE_SETTINGS_SUCCESS = '[USER_SETTINGS] Save Settings Success';
export class SettingsSaveSuccessAction implements Action {
    readonly type = SAVE_SETTINGS_SUCCESS;
    constructor(public payload: any) {}
}

export const SAVE_SETTINGS_FAIL = '[USER_SETTINGS] Load Settings Fail';
export class SettingsSaveFailAction implements Action {
    readonly type = SAVE_SETTINGS_FAIL;
    constructor(public error: Error) {}
}

export type TSettingsActions = SettingsSaveAction | SettingsSaveSuccessAction | SettingsSaveFailAction;
