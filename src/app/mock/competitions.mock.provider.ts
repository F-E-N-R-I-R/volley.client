import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CTypes } from '@app/pages/competitions/core/types/competitions.types';

@Injectable()
export class CompetitionsMockProvider {
    constructor() {
    }

    getAllCompetitions(): Observable<CTypes.ICompetitionList> {
        return new BehaviorSubject({
            items: [
                { name: 'Kubok' },
                { name: 'PoltavaOpen' },
                { name: 'KharkivVolley' }]
        });
    }
}
