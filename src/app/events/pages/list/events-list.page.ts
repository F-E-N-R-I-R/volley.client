import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ETypes } from '@core/types';
import { EventsService } from '@events/core/services';

@Component({
    selector: 'app-events',
    templateUrl: 'events-list.page.html',
    styleUrls: ['events-list.page.scss']
})
export class EventsListPage implements OnInit, OnDestroy {
    private ngUnsubscribe$ = new Subject();
    public events$: Observable<ETypes.IEvent[]> = this.eventsService.list$;

    constructor(private eventsService: EventsService) {
    }


    public ngOnInit() {
        this.eventsService.dispatchGetList({});
    }


    public ngOnDestroy() {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();

    }

}
