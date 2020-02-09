import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as fromActions from '@activities/core/actions';
import * as fromReducers from '@activities/core/reducers';
import * as fromSelectors from '@activities/core/selectors';
import { ATypes, NTypes } from '@core/types';

@Injectable({ providedIn: 'root' })
export class ActivitiesService {
    list$ = this.store.pipe(select(fromSelectors.getListItems));

    constructor(private store: Store<fromReducers.ActivityState>) {
    }

    dispatchGetList(filters: ATypes.IActivityFilter) {
        this.store.dispatch(new fromActions.GetListAction(filters));
    }
    dispatchUpdateFilter(filters: ATypes.IActivityFilter) {
        this.store.dispatch(new fromActions.FilterUpdateAction(filters));
    }
}
