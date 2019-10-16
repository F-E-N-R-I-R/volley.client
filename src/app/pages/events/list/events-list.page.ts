import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-events',
    templateUrl: 'events-list.page.html',
    styleUrls: ['events-list.page.scss']
})
export class EventsListPage {
    private ngUnsubscribe$ = new Subject();

    constructor() {
    }


    public ionViewWillEnter() {
    }


    public ionViewWillLeave() {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();

    }

}
