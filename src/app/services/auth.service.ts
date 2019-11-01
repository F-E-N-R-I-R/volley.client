import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';


@Injectable()
export class AuthenticationService {
    authState = new BehaviorSubject(false);

    constructor(
        private storage: Storage,
        private platform: Platform,
        private router: Router,
    ) {
        this.platform.ready().then(() => {
            this.ifLoggedIn();
        });
    }

    ifLoggedIn() {
        this.storage.get('USER_INFO').then((response) => {
            if (response) {
                this.authState.next(true);
            }
        });
    }


    login() {
        return this.storage.set('USER_INFO', true).then((response) => {
            this.router.navigate(['news']);
            this.authState.next(true);
        });
    }

    logout() {
        this.storage.remove('USER_INFO').then(() => {
            this.router.navigate(['login']);
            this.authState.next(false);
        });
    }

    isAuthenticated() {
        return this.authState.value;
    }



}
