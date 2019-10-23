import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AuthenticationService } from '@app/services';
import { UTypes } from '@app/pages/users/core/types/users.types';
import { AuthService } from '@app/pages/auth/core/services/auth.service';

@Component({
    selector: 'app-events',
    templateUrl: 'login.page.html',
    styleUrls: ['login.page.scss']
})
export class LoginPage {
    private ngUnsubscribe$ = new Subject();
    public user$: Observable<UTypes.IUser> = this.authService.user$;

    constructor(public authService: AuthService, private authenticationService: AuthenticationService) {
        this.user$.subscribe(user => {
            console.log(user);
            user ? this.authenticationService.login() : this.authenticationService.logout();
        });
    }


    public ionViewWillEnter() {
    }


    public ionViewWillLeave() {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();

    }

    public login() {
        this.authService.dispatchLogin();
    }
}
