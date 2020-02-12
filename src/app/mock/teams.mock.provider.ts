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
                    title: 'Loko',
                    logo: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
                    contact: '+38093451233145 (Vasya)',
                    indicators: [],
                },
                {
                    title: 'Vzlet',
                    logo: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
                    contact: '+38093451233143 (Viva)',
                    indicators: [],


                },
                {
                    title: 'Zenit',
                    logo: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
                    contact: '+38093451233144 (Seryoga)',
                    indicators: [],


                },
            ]
        });
    }
}
