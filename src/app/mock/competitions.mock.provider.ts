import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class CompetitionsMockProvider {
    constructor() {}

    getAllCompetitions(): Observable<any> {
        return new BehaviorSubject({items: ['Kubok', 'PoltavaOpen', 'KharkivVolley']});
    }
}
