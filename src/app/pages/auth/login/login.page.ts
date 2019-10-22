import { Component } from '@angular/core';
import {Observable, Subject} from 'rxjs';
// import { AuthenticationService } from '../../../services';
import {UTypes} from '@app/pages/users/core/types/users.types';
import {AuthUserService} from '@app/pages/auth/core/services/auth.user.service';

@Component({
    selector: 'app-events',
    templateUrl: 'login.page.html',
    styleUrls: ['login.page.scss']
})
export class LoginPage {
    private ngUnsubscribe$ = new Subject();
    public user$: Observable<UTypes.IUser[]> = this.authService.user$;

    constructor(public authService: AuthUserService) {
    }


    public ionViewWillEnter() {
        this.authService.dispatchList();
    }


    public ionViewWillLeave() {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();

    }

}
