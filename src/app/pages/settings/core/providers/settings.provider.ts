import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UsersMockProvider } from '@app/mock/users.mock.provider';
import { UTypes } from '@app/pages/settings/core/types/settings.types';

@Injectable()
export class SettingsProvider {

    constructor(private http: HttpClient, private usersMockProvider: UsersMockProvider) {}

    getList(): Observable<UTypes.IUsersList> {
        return this.usersMockProvider.getAllUsers();
    }
}
