import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ATypes } from '@core/types';
import { filter, map } from 'rxjs/operators';
import { ActivitiesService } from '@activities/core/services';

@Component({
    templateUrl: 'activities-list.page.html',
    styleUrls: ['activities-list.page.scss']
})
export class ActivitiesListPage implements OnInit, OnDestroy {
    private ngUnsubscribe$ = new Subject();
    public activities$: Observable<ATypes.IActivity[]> = this.activityService.list$;

    constructor(private activityService: ActivitiesService) {
    }


    public ngOnInit() {
        this.activityService.dispatchGetList({});
    }


    public ngOnDestroy() {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();

    }

}
