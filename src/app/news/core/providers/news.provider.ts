import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { NewsMockProvider } from '@app/mock/news.mock.provider';
import { NTypes } from '@core/types';

@Injectable()
export class NewsProvider {

    constructor(private http: HttpClient, private newsMockProvider: NewsMockProvider) {}

    getList(filters): Observable<NTypes.INewsList> {
        return this.newsMockProvider.getAllNews();
    }

    getItem(item): Observable<NTypes.INews> {
        return this.newsMockProvider.getItemNews();
    }

    createItem(item): Observable<NTypes.INews> {
        return this.newsMockProvider.getItem(item);
    }

    deleteItem(item): Observable<NTypes.INews> {
        return this.newsMockProvider.getItem(item);
    }

    updateItem(item): Observable<NTypes.INews> {
        return this.newsMockProvider.getItem(item);
    }
}
