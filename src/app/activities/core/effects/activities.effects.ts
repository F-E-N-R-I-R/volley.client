import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ActivitiesProvider } from '@activities/core/providers';
import * as ActivitiesActions from '@activities/core/actions/index';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ATypes } from '@core/types';
import IActivityList = ATypes.IActivityList;

@Injectable()
export class ActivitiesEffects {
    @Effect()
    activitiesList$ = this.$action.pipe(
        ofType(ActivitiesActions.GET_LIST),
        switchMap((action: ActivitiesActions.GetListAction) =>
            this.activitiesProvider
                .getList(action.filters)
                .pipe(
                    map((data) => new ActivitiesActions.GetListSuccessAction(data)),
                    catchError((error: Error) =>
                        of(new ActivitiesActions.GetListFailAction(error)),
                    ),
                ),
        ),
    );

    constructor(private $action: Actions, private activitiesProvider: ActivitiesProvider) {
    }
}
