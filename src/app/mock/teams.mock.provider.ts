import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TTypes } from '@core/types';

@Injectable()
export class TeamsMockProvider {
    constructor() {
    }

    getAllTeams(): Observable<TTypes.ITeamsList> {
        return new BehaviorSubject({
            items: [
                {
                    id: '1',
                    title: 'Loko',
                    logo: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
                    contact: '+38093451233145 (Vasya)',
                    indicators: [
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
                    ],
                },
                {
                    id: '2',
                    title: 'Vzlet',
                    logo: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
                    contact: '+38093451233143 (Viva)',
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
                    id: '3',
                    title: 'Zenit',
                    logo: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
                    contact: '+38093451233144 (Seryoga)',
                    indicators: [
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
                            value: '20',
                            description: 'Labalaba',
                        }],


                },
            ],
        });
    }
}
