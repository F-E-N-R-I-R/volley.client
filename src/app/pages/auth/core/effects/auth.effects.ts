import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import * as AuthActions from '../actions';
import { AuthProvider } from '../providers/auth.provider';
import { UTypes } from '@app/pages/users/core/types/users.types';
import { AuthenticationService, ThemeService, ToastService } from '@app/services';

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

    @Effect({ dispatch: false })
    authLoginSuccess$ = this.actions$.pipe(
        ofType(AuthActions.LOGIN_SUCCESS),
        tap((action: AuthActions.AuthLoginSuccessAction) => {
                this.themeService.changeTheme(action.payload.theme || UTypes.ETheme.WHITE);
                this.authenticationService.login();
            }
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

    @Effect({ dispatch: false })
    authLogoutSuccess$ = this.actions$.pipe(
        ofType(AuthActions.LOGOUT_SUCCESS),
        tap((action: AuthActions.AuthLogoutSuccessAction) => {
                this.authenticationService.logout();
            }
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

    @Effect({ dispatch: false })
    updateUserSuccess$ = this.actions$.pipe(
        ofType(AuthActions.UPDATE_USER_SUCCESS),
        tap((action: AuthActions.AuthUpdateUserSuccessAction) => {
                this.toastService.show('User settings update successfully');
            }
        ),
    );

    constructor(
        private authProvider: AuthProvider,
        private authenticationService: AuthenticationService,
        private themeService: ThemeService,
        private toastService: ToastService,
        private actions$: Actions,
    ) {
    }
}
