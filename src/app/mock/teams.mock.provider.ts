import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TTypes } from '@app/pages/teams/core/types/teams.types';

@Injectable()
export class TeamsMockProvider {
    constructor() {}

    getAllTeams(): Observable<TTypes.ITeamsList> {
        return new BehaviorSubject({
            items: [
                { name: 'Loko' },
                { name: 'Vzlet' },
                { name: 'Zenit' },
            ]
        });
    }
}
