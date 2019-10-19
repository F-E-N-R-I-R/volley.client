import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CompetitionsMockProvider } from '@app/mock/competitions.mock.provider';
import { CTypes } from '@app/pages/competitions/core/types/competitions.types';

@Injectable()
export class CompetitionsProvider {

    constructor(private http: HttpClient, private competitionsMockProvider: CompetitionsMockProvider) {}

    getList(): Observable<CTypes.ICompetitionList> {
        return this.competitionsMockProvider.getAllCompetitions();
    }
}
