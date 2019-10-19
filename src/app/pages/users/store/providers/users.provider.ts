import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { UsersMockProvider } from '@app/mock/users.mock.provider';

@Injectable()
export class UsersProvider {

    constructor(private http: HttpClient, private usersMockProvider: UsersMockProvider) {}

    getList(): Observable<any> {
        // return this.http.get();
        // return new BehaviorSubject({items: ['Bob', 'Merry', 'John']});
        return this.usersMockProvider.getAllUsers();
    }
}
