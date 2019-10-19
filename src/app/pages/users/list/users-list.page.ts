import { Component } from '@angular/core';
import { UsersService } from '../core/services/users.service';
import { Observable, Subject } from 'rxjs';

@Component({
    selector: 'users-list',
    templateUrl: 'users-list.page.html',
    styleUrls: ['users-list.page.scss']
})
export class UsersListPage {
    private ngUnsubscribe$ = new Subject();
    public users$: Observable<any[]> = this.usersService.users$;

    constructor(private usersService: UsersService) {
    }


    public ionViewWillEnter() {
        this.usersService.dispatchList();
    }


    public ionViewWillLeave() {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();

    }

}
