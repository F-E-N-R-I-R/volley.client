import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-teams',
    templateUrl: 'teams-list.page.html',
    styleUrls: ['teams-list.page.scss']
})
export class TeamsListPage {
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
