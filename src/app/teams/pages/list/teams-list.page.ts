import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { TeamsProvider } from '@teams/core/providers';
import { TTypes } from '@core/types';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-teams',
    templateUrl: 'teams-list.page.html',
    styleUrls: ['teams-list.page.scss']
})
export class TeamsListPage {
    private ngUnsubscribe$ = new Subject();
    public teams$: Observable<TTypes.ITeam[]> = this.teamsProvider.getList().pipe(map(({ items }) => items));

    constructor(private teamsProvider: TeamsProvider) {
    }


    public ionViewWillEnter() {
    }


    public ionViewWillLeave() {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();

    }

}
