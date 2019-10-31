import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UTypes } from '@app/pages/users/core/types/users.types';

@Injectable()
export class UsersMockProvider {
    private users: UTypes.IUser[] = [
        { fname: 'Bob', lname: 'Dilan' },
        { fname: 'Merry', lname: 'Poppins' },
        { fname: 'John', lname: 'Travolta' },
        { fname: 'Kerry', lname: 'Addams' },
        { fname: 'Dick', lname: 'Horse' },
    ]
        .map(user => ({
            pname: 'Valerievich',
            email: 'pavel@gmail.com',
            sex: UTypes.ESex.MALE,
            notifications: {
                news: true,
                team: false,
                events: false,
                competitions: false,
            },
            ...user,
        }));

    constructor() {
    }

    getAllUsers(): Observable<UTypes.IUsersList> {
        return new BehaviorSubject({
            items: this.users,
            pagination: {
                page: 1,
                per_page: 10,
                pages: 8,
            },
        });
    }

    getUser(): Observable<UTypes.IUser> {
        return new BehaviorSubject(this.users[0]);
    }

    updateUser(user: UTypes.IUser): Observable<UTypes.IUser> {
        this.users[0] = user;
        return new BehaviorSubject(this.users[0]);
    }
}
