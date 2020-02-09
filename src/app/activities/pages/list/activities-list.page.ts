import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ActivitiesProvider } from '@activities/core/providers';
import { ATypes } from '@core/types';
import { map } from 'rxjs/operators';

@Component({
    templateUrl: 'activities-list.page.html',
    styleUrls: ['activities-list.page.scss']
})
export class ActivitiesListPage {
    private ngUnsubscribe$ = new Subject();
    public activities$: Observable<ATypes.IActivity[]> = this.activityProvider.getList().pipe(map(({ items }) => items));

    constructor(private activityProvider: ActivitiesProvider) {
    }


    public ionViewWillEnter() {
    }


    public ionViewWillLeave() {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();

    }

}
