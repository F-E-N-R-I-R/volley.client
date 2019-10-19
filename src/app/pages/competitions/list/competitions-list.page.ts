import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CompetitionsProvider } from '../core/providers/competitions.provider';
import { CTypes } from '../core/types/competitions.types';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-competitions',
    templateUrl: 'competitions-list.page.html',
    styleUrls: ['competitions-list.page.scss']
})
export class CompetitionsListPage {
    private ngUnsubscribe$ = new Subject();
    public competitions$: Observable<CTypes.ICompetition[]> = this.competitionsProvider.getList().pipe(map(({items}) => items));

    constructor(private competitionsProvider: CompetitionsProvider) {
    }


    public ionViewWillEnter() {
    }


    public ionViewWillLeave() {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();

    }

}
