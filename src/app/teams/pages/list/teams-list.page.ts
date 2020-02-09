import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { TTypes } from '@core/types';
import { TeamsService } from '@teams/core/services';

@Component({
    selector: 'app-teams',
    templateUrl: 'teams-list.page.html',
    styleUrls: ['teams-list.page.scss']
})
export class TeamsListPage implements OnInit, OnDestroy {
    private ngUnsubscribe$ = new Subject();
    public teams$: Observable<TTypes.ITeam[]> = this.teamsService.teams$;

    constructor(private teamsService: TeamsService) {
    }

    public ngOnInit() {
        this.teamsService.dispatchGetList({});
    }


    public ngOnDestroy() {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();

    }

}
