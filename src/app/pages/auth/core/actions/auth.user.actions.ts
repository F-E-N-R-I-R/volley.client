import { Action } from '@ngrx/store';

export const LOGIN = '[USER] Login User';
export class UserLoginAction implements Action {
    readonly type = LOGIN;
    constructor() {}
}

export const LOGIN_COMPLETED = '[USER] Login User Success';
export class UserLoginSuccessAction implements Action {
    readonly type = LOGIN_COMPLETED;
    constructor(public payload: any) {}
}

export const LOGIN_FAILED = '[USER] Login User Fail';
export class UserLoginFailAction implements Action {
    readonly type = LOGIN_FAILED;
    constructor(public error: Error) {}
}

/*export const LOGOUT = '[USER] Logout User';
export class UserLogoutAction implements Action {
    readonly type = LOGOUT;
    constructor(public payload: any) {}
}

export const LOGOUT_SUCCESS = '[USER] Logout User Success';
export class UserLogoutSuccessAction implements Action {
    readonly type = LOGOUT_SUCCESS;
    constructor() {}
}

export const LOGOUT_FAILED = '[USER] Logout User Fail';
export class UserLogoutFailAction implements Action {
    readonly type = LOGOUT_FAILED;
    constructor(public error: Error) {}
}*/

export type TUserActions = UserLoginAction | UserLoginSuccessAction | UserLoginFailAction;
                            // UserLogoutAction | UserLogoutSuccessAction | UserLogoutFailAction;
