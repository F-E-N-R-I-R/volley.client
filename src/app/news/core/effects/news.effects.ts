import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as NewsActions from '@news/core/actions';
import { NewsProvider } from '@news/core/providers';

@Injectable()
export class NewsListEffects {
    @Effect()
    newsList$ = this.actions$.pipe(
        ofType(NewsActions.LOAD_COLLECTION),
        switchMap((action: NewsActions.NewsLoadCollectionAction) =>
            this.newsProvider
                .getList(action.payload)
                .pipe(
                    map((data) => new NewsActions.NewsLoadCollectionSuccessAction(data)),
                    catchError((error: Error) =>
                        of(new NewsActions.NewsLoadCollectionFailAction(error)),
                    ),
                ),
        ),
    );

    @Effect()
    newsGetItem$ = this.actions$.pipe(
        ofType(NewsActions.GET_ITEM),
        switchMap((action: NewsActions.NewsGetItemAction) =>
            this.newsProvider
                .getItem(action.payload)
                .pipe(
                    map((data) => new NewsActions.NewsGetItemSuccessAction(data)),
                    catchError((error: Error) =>
                        of(new NewsActions.NewsGetItemFailAction(error)),
                    ),
                ),
        ),
    );

    @Effect()
    newsCreateItem$ = this.actions$.pipe(
        ofType(NewsActions.CREATE_ITEM),
        switchMap((action: NewsActions.NewsCreateItemAction) =>
            this.newsProvider
                .createItem(action.payload)
                .pipe(
                    map((data) => new NewsActions.NewsCreateItemSuccessAction(data)),
                    catchError((error: Error) =>
                        of(new NewsActions.NewsCreateItemFailAction(error)),
                    ),
                ),
        ),
    );

    @Effect()
    newsUpdateItem$ = this.actions$.pipe(
        ofType(NewsActions.UPDATE_ITEM),
        switchMap((action: NewsActions.NewsUpdateItemAction) =>
            this.newsProvider
                .updateItem(action.payload)
                .pipe(
                    map((data) => new NewsActions.NewsUpdateItemSuccessAction(data)),
                    catchError((error: Error) =>
                        of(new NewsActions.NewsUpdateItemFailAction(error)),
                    ),
                ),
        ),
    );

    @Effect()
    newsDeleteItem$ = this.actions$.pipe(
        ofType(NewsActions.DELETE_ITEM),
        switchMap((action: NewsActions.NewsDeleteItemAction) =>
            this.newsProvider
                .deleteItem(action.payload)
                .pipe(
                    map((data) => new NewsActions.NewsDeleteItemSuccessAction(data)),
                    catchError((error: Error) =>
                        of(new NewsActions.NewsDeleteItemFailAction(error)),
                    ),
                ),
        ),
    );

    constructor(
        private newsProvider: NewsProvider,
        private actions$: Actions,
    ) {
    }
}
