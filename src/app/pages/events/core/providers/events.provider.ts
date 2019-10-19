import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { EventsMockProvider } from '@app/mock/events.mock.provider';
import { ETypes } from '@app/pages/events/core/types/events.types';

@Injectable()
export class EventsProvider {

    constructor(private http: HttpClient, private eventsMockProvider: EventsMockProvider) {}

    getList(): Observable<ETypes.IEventsList> {
        return this.eventsMockProvider.getAllEvents();
    }
}
