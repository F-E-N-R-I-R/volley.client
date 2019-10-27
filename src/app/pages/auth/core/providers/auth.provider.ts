import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UsersMockProvider } from '@app/mock/users.mock.provider';
import { UTypes } from '@app/pages/auth/core/types/auth.types';

@Injectable()
export class AuthProvider {

    constructor(private http: HttpClient, private usersMockProvider: UsersMockProvider) {}

    login(): Observable<UTypes.IUser> {
        return this.usersMockProvider.getUser();
    }
}
