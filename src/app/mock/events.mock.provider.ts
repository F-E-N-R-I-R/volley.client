import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class EventsMockProvider {
    constructor() {}

    getAllEvents(): Observable<any> {
        return new BehaviorSubject({items: ['Event1', 'Event2', 'Event3']});
    }
}
