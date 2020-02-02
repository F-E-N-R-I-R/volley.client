import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as fromActions from '@news/core/actions';
import * as fromReducers from '@news/core/reducers';
import * as fromSelectors from '@news/core/selectors';
import { NTypes } from '@core/types';

@Injectable({ providedIn: 'root' })
export class FiltersService {
    filters$ = this.store.pipe(select(fromSelectors.getFilters));

    constructor(private store: Store<fromReducers.NewState>) {
    }

    dispatchUpdateFilters(filters: NTypes.IFilters) {
        this.store.dispatch(new fromActions.FiltersUpdateAction(filters));
    }
}
