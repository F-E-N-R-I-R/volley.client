import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class AuthenticationService {
    authState = new BehaviorSubject(false);

    constructor(
        private storage: Storage,
        private platform: Platform,
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
        this.storage.set('USER_INFO', true).then((response) => {
            this.authState.next(true);
        });
    }

    logout() {
        this.storage.remove('USER_INFO').then(() => {
            this.authState.next(false);
        });
    }

    isAuthenticated() {
        return this.authState.value;
    }



}
