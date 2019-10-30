import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UsersMockProvider } from '@app/mock/users.mock.provider';
import { UTypes } from '@app/pages/users/core/types/users.types';

@Injectable()
export class AuthProvider {

    constructor(private http: HttpClient, private usersMockProvider: UsersMockProvider) {}

    login(): Observable<UTypes.IUser> {
        return this.usersMockProvider.getUser();
    }

    public updateSettings(user: UTypes.IUser): Observable<UTypes.IUser> {
        return this.usersMockProvider.updateUser(user);
    }
}
