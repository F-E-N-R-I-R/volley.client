import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as UsersActions from '../actions';
import { AuthUserProvider } from '../providers/auth.user.provider';

@Injectable()
export class UserEffects {
    @Effect()
    user$ = this.actions$.pipe(
        ofType(UsersActions.LOGIN),
        switchMap((action: UsersActions.UserLoginAction) =>
            this.usersProvider
                .getUser()
                .pipe(
                    map((data) => new UsersActions.UserLoginSuccessAction(data)),
                    catchError((error: Error) =>
                        of(new UsersActions.UserLoginFailAction(error)),
                    ),
                ),
        ),
    );

    constructor(
        private usersProvider: AuthUserProvider,
        private actions$: Actions,
    ) {
    }
}
