import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as SettingsActions from '../actions';
import { SettingsProvider } from '../providers/settings.provider';

@Injectable()
export class SettingsEffects {
    @Effect()
    settingsList$ = this.actions$.pipe(
        ofType(SettingsActions.LOAD_SETTINGS),
        switchMap((action: SettingsActions.SettingsLoadAction) =>
            this.settingsProvider
                .getList()
                .pipe(
                    map((data) => new SettingsActions.SettingsLoadSuccessAction(data)),
                    catchError((error: Error) =>
                        of(new SettingsActions.SettingsLoadFailAction(error)),
                    ),
                ),
        ),
    );

    constructor(
        private settingsProvider: SettingsProvider,
        private actions$: Actions,
    ) {
    }
}
