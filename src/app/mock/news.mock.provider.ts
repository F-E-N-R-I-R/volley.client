import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NTypes } from '@core/types';

@Injectable()
export class NewsMockProvider {
    constructor() {
    }

    getAllNews(): Observable<NTypes.INewsList> {
        return new BehaviorSubject({
            items: [
                {
                    id: 1,
                    title: 'New1',
                    picture: 'string',
                    description: 'string',
                    category: NTypes.ECategory.FVU,
                    date: 'string',
                    created_by: 'string',
                },
                {
                    id: 2,
                    title: 'New2',
                    picture: 'string',
                    description: 'string',
                    category: NTypes.ECategory.FVHO,
                    date: 'string',
                    created_by: 'string',
                },
                {
                    id: 3,
                    title: 'New3',
                    picture: 'string',
                    description: 'string',
                    category: NTypes.ECategory.FIVB,
                    date: 'string',
                    created_by: 'string',
                },
            ]
        });
    }

    getItemNews(): Observable<NTypes.INews> {
        return new BehaviorSubject({
            id: 1,
            title: 'New1',
            picture: 'string',
            description: 'string',
            category: NTypes.ECategory.FVU,
            date: 'string',
            created_by: 'string',
        });
    }
}
