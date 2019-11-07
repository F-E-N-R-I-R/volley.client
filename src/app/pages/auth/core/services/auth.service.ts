import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as fromActions from '../actions';
import * as fromReducers from '../reducers';
import * as fromSelectors from '../selectors';
import { UTypes } from '@app/pages/users/core/types/users.types';

@Injectable({ providedIn: 'root' })
export class AuthService {
    loading$ = this.store.pipe(select(fromSelectors.getPending));
    error$ = this.store.pipe(select(fromSelectors.getError));
    user$ = this.store.pipe(select(fromSelectors.getUser));

    constructor(private store: Store<fromReducers.AuthorizationState>) {
    }

    dispatchLogin() {
        this.store.dispatch(new fromActions.AuthLoginAction());
    }


    dispatchLogout() {
        this.store.dispatch(new fromActions.AuthLogoutAction());
    }

    dispatchUpdate(user: UTypes.IUser) {
        this.store.dispatch(new fromActions.AuthUpdateUserAction(user));
    }

    dispatchSilentUpdate(user: UTypes.IUser) {
        this.store.dispatch(new fromActions.AuthUpdateUserSilentAction(user));
    }
}
