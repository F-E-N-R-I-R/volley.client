import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NTypes } from '@core/types';

@Injectable()
export class NewsMockProvider {
    constructor() {}

    getAllNews(): Observable<NTypes.INewsList> {
        return new BehaviorSubject({
            items: [
<<<<<<< HEAD
                { name: 'News1', id: 1 },
                { name: 'News2', id: 2 },
                { name: 'News3', id: 3 },
=======
                {   title: 'New1',
                    picture: 'string',
                    description: 'string',
                    category: NTypes.ECategory.FVU,
                    date: 'string',
                    created_by: 'string', },
                {   title: 'New2',
                    picture: 'string',
                    description: 'string',
                    category: NTypes.ECategory.FVHO,
                    date: 'string',
                    created_by: 'string', },
                {   title: 'New3',
                    picture: 'string',
                    description: 'string',
                    category: NTypes.ECategory.FIVB,
                    date: 'string',
                    created_by: 'string', },
>>>>>>> add types and mock news
            ]
        });
    }
}
