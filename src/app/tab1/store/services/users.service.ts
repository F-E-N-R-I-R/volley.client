import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as fromActions from '../actions';
import * as fromReducers from '../reducers';
import * as fromSelectors from '../selectors';

@Injectable({ providedIn: 'root' })
export class UsersService {
    loading$ = this.store.pipe(select(fromSelectors.getListPending));
    error$ = this.store.pipe(select(fromSelectors.getListError));
    users$ = this.store.pipe(select(fromSelectors.getListItems));
    pagination$ = this.store.pipe(select(fromSelectors.getListPagination));

    constructor(private store: Store<fromReducers.UserState>) {
    }

    dispatchList() {
        this.store.dispatch(new fromActions.UsersLoadCollectionAction());
    }
}
