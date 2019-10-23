import { Action } from '@ngrx/store';

export const LOGIN = '[AUTH] Login';
export class AuthLoginAction implements Action {
    readonly type = LOGIN;
    constructor() {}
}

export const LOGIN_SUCCESS = '[AUTH] Login Success';
export class AuthLoginSuccessAction implements Action {
    readonly type = LOGIN_SUCCESS;
    constructor(public payload: any) {}
}

export const LOGIN_FAIL = '[AUTH] Login Fail';
export class AuthLoginFailAction implements Action {
    readonly type = LOGIN_FAIL;
    constructor(public error: Error) {}
}

export const LOGOUT = '[AUTH] logout';
export class AuthLogoutAction implements Action {
    readonly type = LOGOUT;
    constructor() {}
}

export const LOGOUT_SUCCESS = '[AUTH] logout Success';
export class AuthLogoutSuccessAction implements Action {
    readonly type = LOGOUT_SUCCESS;
    constructor() {}
}

export const LOGOUT_FAIL = '[AUTH] logout Fail';
export class AuthLogoutFailAction implements Action {
    readonly type = LOGOUT_FAIL;
    constructor() {}
}

export type TAuthActions = AuthLoginAction | AuthLoginSuccessAction | AuthLoginFailAction | AuthLogoutAction | AuthLogoutSuccessAction | AuthLogoutFailAction;
