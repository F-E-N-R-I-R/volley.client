import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UsersMockProvider } from '@app/mock/users.mock.provider';
import { UTypes } from '@app/pages/users/core/types/users.types';

@Injectable()
export class AuthUserProvider {

    constructor(private http: HttpClient, private usersMockProvider: UsersMockProvider) {}

    getUser(): Observable<UTypes.IUser> {
        return this.usersMockProvider.getUser();
    }
}
