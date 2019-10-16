import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-competitions',
    templateUrl: 'competitions-list.page.html',
    styleUrls: ['competitions-list.page.scss']
})
export class CompetitionsListPage {
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
