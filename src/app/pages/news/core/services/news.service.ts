import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as fromActions from '@news/core/actions';
import * as fromReducers from '@news/core/reducers';
import * as fromSelectors from '@news/core/selectors';
import { NTypes } from '@core/types';

@Injectable({ providedIn: 'root' })
export class NewsService {
    loading$ = this.store.pipe(select(fromSelectors.getListPending));
    error$ = this.store.pipe(select(fromSelectors.getListError));
    news$ = this.store.pipe(select(fromSelectors.getListItems));
    pagination$ = this.store.pipe(select(fromSelectors.getListPagination));
    newsItem$ = this.store.pipe(select(fromSelectors.getItem));

    constructor(private store: Store<fromReducers.NewState>) {
    }

    dispatchList(filters: NTypes.IFilters) {
        this.store.dispatch(new fromActions.NewsLoadCollectionAction(filters));
    }

    dispatchGetItem(item: NTypes.INews) {
        this.store.dispatch(new fromActions.NewsGetItemAction(item));
    }

    dispatchCreateItem(item: NTypes.INews) {
        this.store.dispatch(new fromActions.NewsCreateItemAction(item));
    }

    dispatchUpdateItem(item: NTypes.INews) {
        this.store.dispatch(new fromActions.NewsUpdateItemAction(item));
    }

    dispatchDeleteItem(item: NTypes.INews) {
        this.store.dispatch(new fromActions.NewsDeleteItemAction(item));
    }
}
