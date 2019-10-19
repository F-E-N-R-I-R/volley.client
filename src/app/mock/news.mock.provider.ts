import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NTypes } from '@app/pages/news/core/types/news.types';

@Injectable()
export class NewsMockProvider {
    constructor() {}

    getAllNews(): Observable<NTypes.INewsList> {
        return new BehaviorSubject({
            items: [
                { name: 'News1' },
                { name: 'News2' },
                { name: 'News3' },
            ]
        });
    }
}
