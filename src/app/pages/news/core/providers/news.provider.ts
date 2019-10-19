import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { NewsMockProvider } from '@app/mock/news.mock.provider';
import { NTypes } from '@app/pages/news/core/types/news.types';

@Injectable()
export class NewsProvider {

    constructor(private http: HttpClient, private newsMockProvider: NewsMockProvider) {}

    getList(): Observable<NTypes.INewsList> {
        return this.newsMockProvider.getAllNews();
    }
}
