import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { TeamsMockProvider } from '@app/mock/teams.mock.provider';
import { TTypes } from '@core/types';

@Injectable()
export class TeamsProvider {

    constructor(private http: HttpClient, private teamsMockProvider: TeamsMockProvider) {}

    getList(): Observable<TTypes.ITeamsList> {
        return this.teamsMockProvider.getAllTeams();
    }
}
