import { Component } from '@angular/core';
import { UsersService } from './store/services/users.service';
import { Observable, Subject } from 'rxjs';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
    private ngUnsubscribe$ = new Subject();
    public users$: Observable<any[]> = this.usersService.users$;

    constructor(private usersService: UsersService) {
    }


    public ionViewWillEnter() {
        this.users$.subscribe(u => {
            console.log(u);
        });
        this.usersService.dispatchList();
    }


    public ionViewWillLeave() {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();

    }

}
