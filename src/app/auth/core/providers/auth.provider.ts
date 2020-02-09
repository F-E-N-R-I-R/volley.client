import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

import { UsersMockProvider } from '@app/mock/users.mock.provider';
import { UTypes } from '@core/types';
import { NavController } from '@ionic/angular';

@Injectable()
export class AuthProvider {

    constructor(private http: HttpClient, private usersMockProvider: UsersMockProvider, private nav: NavController) {}

    login(): Observable<UTypes.IUser> {
        return this.usersMockProvider.getUser();
    }

    public updateSettings(user: UTypes.IUser): Observable<UTypes.IUser> {
        return this.usersMockProvider.updateUser(user);
    }

    public redirectOnLogin() {
        return from(this.nav.navigateRoot('/events', { animated: true, animationDirection: 'forward' }));
    }

    public redirectOnLogout() {
        return from(this.nav.navigateRoot('/login', { animated: true, animationDirection: 'back' }));
    }
}
