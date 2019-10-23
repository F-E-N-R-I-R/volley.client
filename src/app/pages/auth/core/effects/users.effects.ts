import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as AuthActions from '../actions';
import { AuthProvider } from '../providers/auth.provider';


@Injectable()
export class UsersListEffects {
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
    constructor(
        private authProvider: AuthProvider,
        private actions$: Actions,
    ) {
    }
}
