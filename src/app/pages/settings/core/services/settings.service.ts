import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as fromActions from '../actions';
import * as fromReducers from '../reducers';
import * as fromSelectors from '../selectors';

@Injectable({ providedIn: 'root' })
export class SettingsService {
    loading$ = this.store.pipe(select(fromSelectors.getListPending));
    error$ = this.store.pipe(select(fromSelectors.getListError));
    settings$ = this.store.pipe(select(fromSelectors.getListSettings));

    constructor(private store: Store<fromReducers.SettingState>) {
    }

    dispatchSettings(payload) {
        this.store.dispatch(new fromActions.SettingsSaveAction(payload));
    }
}
