import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { TeamsProvider } from '@teams/core/providers';
import * as TeamsAction from '@teams/core/actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { GetListSuccessAction } from '@teams/core/actions';
import { of } from 'rxjs';

@Injectable()
export class TeamsEffects {
    @Effect()
    teamsList$ = this.actions$.pipe(
        ofType(TeamsAction.GET_LIST),
        switchMap((actions: GetListSuccessAction) =>
            this.teamsProvider.getList(actions.payload).pipe(
                map((data) => new TeamsAction.GetListSuccessAction(data)),
                catchError((error: Error) => of(new TeamsAction.GetListFailAction(error)),
                ),
            ),
        )
    );

    constructor(private actions$: Actions, private teamsProvider: TeamsProvider) {
    }
}
