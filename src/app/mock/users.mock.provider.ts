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
            gender: UTypes.EGender.MALE,
            phone: 380506785432,
            city: UTypes.ECity.KHARKOV,
            date_of_birth: '2019-11-03',
            language: UTypes.ELanguage.RUSSIAN,
            theme: UTypes.ETheme.BLACK,
            avatar: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',

            // additional
            height: 170,
            weight: 80,
            chest_girt: 90,
            waist: 60,
            hip_girth: 90,
            shoe_size: 42,
            sports_category: 'B',
            teams: [
                {
                    name: 'Vseya mira vzlet',
                    image: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',

                },
                {
                    name: 'Liga zolotogo dojdya',
                    image: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
                },
            ],
            places: [
                {
                    name: 'HTT',
                    image: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',

                },
                {
                    name: 'PTU 30',
                    image: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
                },
            ],

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
