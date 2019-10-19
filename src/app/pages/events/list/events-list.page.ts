import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { EventsProvider } from '../core/providers/events.provider';
import { ETypes } from '../core/types/events.types';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-events',
    templateUrl: 'events-list.page.html',
    styleUrls: ['events-list.page.scss']
})
export class EventsListPage {
    private ngUnsubscribe$ = new Subject();
    public events$: Observable<ETypes.IEvent[]> = this.eventsProvider.getList().pipe(map(({ items }) => items));

    constructor(private eventsProvider: EventsProvider) {
    }


    public ionViewWillEnter() {
    }


    public ionViewWillLeave() {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();

    }

}
