import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TTypes } from '@app/pages/teams/core/types/teams.types';

@Injectable()
export class TeamsMockProvider {
    constructor() {
    }

    getAllTeams(): Observable<TTypes.ITeamsList> {
        return new BehaviorSubject({
            items: [
                {
                    name: 'Loko',
                    image: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
                },
                {
                    name: 'Vzlet',
                    image: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
                },
                {
                    name: 'Zenit',
                    image: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
                },
            ]
        });
    }
}
