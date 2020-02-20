import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ETypes } from '@core/types';
import { EventsService } from '@events/core/services';

@Component({
    selector: 'app-events-item',
    templateUrl: 'events-item.page.html',
    styleUrls: ['events-item.page.scss']
})
export class EventsItemPage implements OnInit, OnDestroy {
    private ngUnsubscribe$ = new Subject();
    // public events$: Observable<ETypes.IEvent[]> = this.eventsService.list$;

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
