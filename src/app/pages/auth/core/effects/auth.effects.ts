import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as AuthActions from '../actions';
import { AuthProvider } from '../providers/auth.provider';
import { UTypes } from '@app/pages/users/core/types/users.types';


@Injectable()
export class AuthEffects {
    @Effect()
    authLogin$ = this.actions$.pipe(
        ofType(AuthActions.LOGIN),
        switchMap((action: AuthActions.AuthLoginAction) =>
            this.authProvider
                .login()
                .pipe(
                    map((data) => new AuthActions.AuthLoginSuccessAction(data)),
                    catchError((error: Error) =>
                        of(new AuthActions.AuthLoginFailAction(error)),
                    ),
                ),
        ),
    );

    @Effect()
    authLogout$ = this.actions$.pipe(
        ofType(AuthActions.LOGOUT),
        switchMap((action: AuthActions.AuthLogoutAction) =>
            this.authProvider
                .login()
                .pipe(
                    map(() => new AuthActions.AuthLogoutSuccessAction()),
                    catchError((error: Error) =>
                        of(new AuthActions.AuthLogoutFailAction()),
                    ),
                ),
        ),
    );

    @Effect()
    updateUser$ = this.actions$.pipe(
        ofType(AuthActions.UPDATE_USER),
        switchMap((action: AuthActions.AuthUpdateUserAction) =>
            this.authProvider
                .updateSettings(action.payload)
                .pipe(
                    map((data: UTypes.IUser) => new AuthActions.AuthUpdateUserSuccessAction(data)),
                    catchError((error: Error) =>
                        of(new AuthActions.AuthUpdateUserFailAction(error)),
                    ),
                ),
        ),
    );

    constructor(
        private authProvider: AuthProvider,
        private actions$: Actions,
    ) {
    }
}
