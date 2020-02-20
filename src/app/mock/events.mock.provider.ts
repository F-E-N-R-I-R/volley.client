import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ETypes } from '@core/types';

@Injectable()
export class EventsMockProvider {
    constructor() {}

    getAllEvents(): Observable<ETypes.IEventsList> {
        return new BehaviorSubject({
            items: [
                {
                    id: '1',
                    title: 'Training HATT',
                    logo: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
                    type: 'training',
                    date: '01/03/2020',
                    indicators: []
                },
                {
                    id: '2',
                    title: 'Chempionat Kharkiv',
                    logo: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
                    type: 'chemp',
                    date: '22/02/2020',
                    indicators: []
                },
                {
                    id: '3',
                    title: 'Tovaruha',
                    logo: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
                    type: 'tovaruha',
                    date: '19/02/2020',
                    indicators: []
                },
                ]
        });
    }
}
