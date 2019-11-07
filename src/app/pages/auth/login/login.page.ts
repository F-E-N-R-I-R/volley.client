import { Component } from '@angular/core';
import { AuthService } from '@app/pages/auth/core/services/auth.service';

@Component({
    selector: 'app-events',
    templateUrl: 'login.page.html',
    styleUrls: ['login.page.scss']
})
export class LoginPage {
    constructor(public authService: AuthService) {
    }


    public ionViewWillEnter() {
    }


    public ionViewWillLeave() {

    }

    public login() {
        this.authService.dispatchLogin();
    }
}
