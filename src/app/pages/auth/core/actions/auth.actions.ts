import { Action } from '@ngrx/store';
import { UTypes } from '@app/pages/users/core/types/users.types';

export const LOGIN = '[AUTH] Login';

export class AuthLoginAction implements Action {
    readonly type = LOGIN;

    constructor() {
    }
}

export const LOGIN_SUCCESS = '[AUTH] Login Success';

export class AuthLoginSuccessAction implements Action {
    readonly type = LOGIN_SUCCESS;

    constructor(public payload: any) {
    }
}

export const LOGIN_FAIL = '[AUTH] Login Fail';

export class AuthLoginFailAction implements Action {
    readonly type = LOGIN_FAIL;

    constructor(public error: Error) {
    }
}

export const LOGOUT = '[AUTH] logout';

export class AuthLogoutAction implements Action {
    readonly type = LOGOUT;

    constructor() {
    }
}

export const LOGOUT_SUCCESS = '[AUTH] logout Success';

export class AuthLogoutSuccessAction implements Action {
    readonly type = LOGOUT_SUCCESS;

    constructor() {
    }
}

export const LOGOUT_FAIL = '[AUTH] logout Fail';

export class AuthLogoutFailAction implements Action {
    readonly type = LOGOUT_FAIL;

    constructor() {
    }
}

export const UPDATE_USER = '[AUTH] User Update';

export class AuthUpdateUserAction implements Action {
    readonly type = UPDATE_USER;

    constructor(public payload: UTypes.IUser) {
    }
}

export const UPDATE_USER_SUCCESS = '[AUTH] User Update Success';

export class AuthUpdateUserSuccessAction implements Action {
    readonly type = UPDATE_USER_SUCCESS;

    constructor(public payload: UTypes.IUser) {
    }
}

export const UPDATE_USER_FAIL = '[AUTH] User Update Fail';

export class AuthUpdateUserFailAction implements Action {
    readonly type = UPDATE_USER_FAIL;

    constructor(public error: Error) {
    }
}

export const UPDATE_USER_SILENT = '[AUTH] User Update Silent';

export class AuthUpdateUserSilentAction implements Action {
    readonly type = UPDATE_USER_SILENT;

    constructor(public payload: UTypes.IUser) {
    }
}

export type TAuthActions =
    | AuthLoginAction
    | AuthLoginSuccessAction
    | AuthLoginFailAction
    | AuthLogoutAction
    | AuthLogoutSuccessAction
    | AuthLogoutFailAction
    | AuthUpdateUserAction
    | AuthUpdateUserSuccessAction
    | AuthUpdateUserFailAction
    | AuthUpdateUserSilentAction;
