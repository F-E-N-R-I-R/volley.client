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

    constructor(
        private newsProvider: NewsProvider,
        private actions$: Actions,
    ) {
    }
}
