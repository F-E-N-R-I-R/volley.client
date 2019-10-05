import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class UsersProvider {
    constructor(private http: HttpClient) {}

    getList(): Observable<any> {
        // return this.http.get();
        return new BehaviorSubject({items: ['Bob', 'Merry', 'John']});
    }
}
