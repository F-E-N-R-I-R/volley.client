import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { EventsMockProvider } from '@app/mock/events.mock.provider';
import { ETypes } from '@core/types';

@Injectable()
export class EventsProvider {

    constructor(private http: HttpClient, private eventsMockProvider: EventsMockProvider) {}

    getList(filters: ETypes.IEventsFilters): Observable<ETypes.IEventsList> {
        return this.eventsMockProvider.getAllEvents();
    }
}
