import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromActions from '@teams/core/actions';
import * as fromReducers from '@teams/core/reducers';
import * as fromSelectors from '@teams/core/selectors';
import { TTypes } from '@core/types';

@Injectable({ providedIn: 'root' })

export class TeamsService {
    teams$ = this.store.pipe(select(fromSelectors.getListItems));

    constructor(private store: Store<fromReducers.NewState>) {
    }

    dispatchGetList(filters: TTypes.ITeamFilter) {
        this.store.dispatch(new fromActions.GetListAction(filters));
    }

    dispatchUpdateFilter(filters: TTypes.ITeamFilter) {
        this.store.dispatch(new fromActions.FilterUpdateAction(filters));
    }
}
