import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ETypes } from '@app/pages/events/core/types/events.types';

@Injectable()
export class EventsMockProvider {
    constructor() {}

    getAllEvents(): Observable<ETypes.IEventsList> {
        return new BehaviorSubject({
            items: [
                { name: 'Event1' },
                { name: 'Event2' },
                { name: 'Event3' },
                ]
        });
    }
}
