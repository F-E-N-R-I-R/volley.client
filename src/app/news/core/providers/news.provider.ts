import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { NewsMockProvider } from '@app/mock/news.mock.provider';
import { NTypes } from '@core/types';

@Injectable()
export class NewsProvider {

    constructor(private http: HttpClient, private newsMockProvider: NewsMockProvider) {}

    getList(filters): Observable<NTypes.INewsList> {
        console.log(filters);
        return this.newsMockProvider.getAllNews();
    }

    getItem(item): Observable<NTypes.INews> {
        console.log(item);
        return this.newsMockProvider.getItemNews();
    }

    createItem(item): Observable<NTypes.INews> {
        console.log(item);
        return this.newsMockProvider.getItemNews();
    }

    deleteItem(item): Observable<NTypes.INews> {
        console.log(item);
        return this.newsMockProvider.getItemNews();
    }

    updateItem(item): Observable<NTypes.INews> {
        console.log(item);
        return this.newsMockProvider.getItemNews();
    }
}
