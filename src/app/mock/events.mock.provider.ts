import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ETypes } from '@core/types';

@Injectable()
export class EventsMockProvider {
    public items: ETypes.IEvent[] = [
        {
            id: '1',
            title: 'Training HATT',
            logo: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
            type: 'training',
            date: ['2020-01-03'],
            indicators: [
                {
                    name: 'man',
                    color: 'danger',
                    value: '',
                    description: 'BlaBlalalfas',
                },
                {
                    name: 'woman',
                    color: 'primary',
                    value: '',
                    description: 'Abla',
                },
                {
                    name: null,
                    src: 'assets/icon/dollar.svg',
                    color: 'secondary',
                    value: '',
                    description: 'Labalaba',
                }
            ],
        },
        {
            id: '2',
            title: 'Chempionat Kharkiv',
            logo: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
            type: 'chemp',
            date: ['2020-02-11'],
            indicators: [
                {
                    name: 'man',
                    color: 'danger',
                    value: '',
                    description: 'BlaBlalalfas',
                },
                {
                    name: 'woman',
                    color: 'primary',
                    value: '',
                    description: 'Abla',
                },
                {
                    name: null,
                    src: 'assets/icon/dollar.svg',
                    color: 'secondary',
                    value: '43',
                    description: 'Labalaba',
                },
            ],
        },
        {
            id: '3',
            title: 'Tovaruha',
            logo: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
            type: 'tovaruha',
            date: ['2020-02-19'],
            indicators: [
                {
                    name: 'man',
                    color: 'danger',
                    value: '',
                    description: 'BlaBlalalfas',
                },
                {
                    name: 'woman',
                    color: 'primary',
                    value: '',
                    description: 'Abla',
                },
                {
                    name: null,
                    src: 'assets/icon/dollar.svg',
                    color: 'secondary',
                    value: '',
                    description: 'Labalaba',
                }
            ],
        },
    ];

    constructor() {
    }

    getAllEvents(): Observable<ETypes.IEventsList> {
        return new BehaviorSubject({
            items: this.items
        });
    }
}
