import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as fromActions from '@events/core/actions';
import * as fromReducers from '@events/core/reducers';
import * as fromSelectors from '@events/core/selectors';
import { ETypes } from '@core/types';

@Injectable({ providedIn: 'root' })
export class EventsService {
    list$ = this.store.pipe(select(fromSelectors.getListItems));

    constructor(private store: Store<fromReducers.EventState>) {
    }

    dispatchGetList(filters: ETypes.IEventsFilters) {
        this.store.dispatch(new fromActions.GetListAction(filters));
    }

    dispatchUpdateFilter(filters: ETypes.IEventsFilters) {
        this.store.dispatch(new fromActions.FiltersUpdateAction(filters));
    }
}
