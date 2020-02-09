import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EventsProvider } from '@events/core/providers';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as EventsActions from '@events/core/actions';

@Injectable()
export class EventsEffects {
    @Effect()
    eventsList$ = this.actions$.pipe(
        ofType(EventsActions.GET_LIST),
        switchMap((action: EventsActions.GetListAction) =>
            this.eventsProvider
                .getList(action.payload)
                .pipe(
                    map((data) => new EventsActions.GetListSuccessAction(data)),
                    catchError((error: Error) =>
                        of(new EventsActions.GetListFailAction(error)),
                    ),
                ),
        ),
    );

    constructor(private actions$: Actions, private eventsProvider: EventsProvider) {
    }
}
