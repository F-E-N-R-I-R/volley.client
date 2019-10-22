import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as fromActions from '../actions';
import * as fromReducers from '../reducers';
import * as fromSelectors from '../selectors';

@Injectable({ providedIn: 'root' })
export class AuthUserService {
    loading$ = this.store.pipe(select(fromSelectors.getListPending));
    error$ = this.store.pipe(select(fromSelectors.getListError));
    user$ = this.store.pipe(select(fromSelectors.getListItems));
    pagination$ = this.store.pipe(select(fromSelectors.getListPagination));

    constructor(private store: Store<fromReducers.UState>) {
    }

    dispatchList() {
        this.store.dispatch(new fromActions.UserLoginAction());
    }
}
