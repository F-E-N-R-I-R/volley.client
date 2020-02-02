import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as UsersActions from '@users/core/actions';
import { UsersProvider } from '@users/core/providers';

@Injectable()
export class UsersListEffects {
    @Effect()
    usersList$ = this.actions$.pipe(
        ofType(UsersActions.LOAD_COLLECTION),
        switchMap((action: UsersActions.UsersLoadCollectionAction) =>
            this.usersProvider
                .getList()
                .pipe(
                    map((data) => new UsersActions.UserLoadCollectionSuccessAction(data)),
                    catchError((error: Error) =>
                        of(new UsersActions.UsersLoadCollectionFailAction(error)),
                    ),
                ),
        ),
    );

    constructor(
        private usersProvider: UsersProvider,
        private actions$: Actions,
    ) {
    }
}
