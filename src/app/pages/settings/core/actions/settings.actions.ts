import { Action } from '@ngrx/store';

export const LOAD_SETTINGS = '[USER_SETTINGS] Load Settings';
export class SettingsLoadAction implements Action {
    readonly type = LOAD_SETTINGS;
    constructor() {}
}

export const LOAD_SETTINGS_SUCCESS = '[USER_SETTINGS] Load Settings Success';
export class SettingsLoadSuccessAction implements Action {
    readonly type = LOAD_SETTINGS_SUCCESS;
    constructor(public payload: any) {}
}

export const LOAD_SETTINGS_FAIL = '[USER_SETTINGS] Load Settings Fail';
export class SettingsLoadFailAction implements Action {
    readonly type = LOAD_SETTINGS_FAIL;
    constructor(public error: Error) {}
}

export type TSettingsActions = SettingsLoadAction | SettingsLoadSuccessAction | SettingsLoadFailAction;
