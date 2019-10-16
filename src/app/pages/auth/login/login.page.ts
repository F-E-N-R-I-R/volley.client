import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthenticationService } from '../../../services';

@Component({
    selector: 'app-events',
    templateUrl: 'login.page.html',
    styleUrls: ['login.page.scss']
})
export class LoginPage {
    private ngUnsubscribe$ = new Subject();

    constructor(public authService: AuthenticationService) {
    }


    public ionViewWillEnter() {
    }


    public ionViewWillLeave() {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();

    }

}
