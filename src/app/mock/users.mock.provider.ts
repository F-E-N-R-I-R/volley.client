import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UTypes } from '@app/pages/users/core/types/users.types';

@Injectable()
export class UsersMockProvider {

    constructor() {
    }

    getAllUsers(): Observable<UTypes.IUsersList> {
        return new BehaviorSubject({
            items: [
                {
                    fname: 'Bob',
                    lname: 'Dilan',
                    pname: 'Valerievich',
                    email:'pavel@gmail.com',
                    sex: UTypes.ESex.MALE,

                    notifications: {
                        news: true,
                    }
                    // login: 'bob',
                    // phone: 805012345678,
                    // email: 'bob@user.com',
                    // firstname: 'Bob',
                    // lastname: '',
                    // password: '12345',
                    // age: 22,
                    // sex: 'man',
                    // avatar: '',
                    // rise: 175,
                    // amplua: 'Opposite',
                    // date_of_birth: '',
                    // number: 11,
                    // team: '',
                    // rank: '',
                },
                {
                    fname: 'Merry',
                    lname: 'Poppins',
                    pname: 'Valerievich',
                    email:'pavel@gmail.com',
                    sex: UTypes.ESex.MALE,
                    notifications: {
                        news: true,
                    }
                    // login: 'merry',
                    // phone: 805012345678,
                    // email: 'merry@user.com',
                    // firstname: 'Merry',
                    // lastname: '',
                    // password: '12345',
                    // age: 25,
                    // sex: 'woman',
                    // avatar: '',
                    // rise: 170,
                    // amplua: 'Setter',
                    // date_of_birth: '',
                    // number: 6,
                    // team: '',
                    // rank: '',
                },
                {
                    fname: 'John',
                    lname: 'Travolta',
                    pname: 'Valerievich',
                    email:'pavel@gmail.com',
                    sex: UTypes.ESex.MALE,
                    notifications: {
                        news: true,
                    }
                    // login: 'john',
                    // phone: 805012345678,
                    // email: 'john@user.com',
                    // firstname: 'John',
                    // lastname: '',
                    // password: '12345',
                    // age: 36,
                    // sex: 'man',
                    // avatar: '',
                    // rise: 194,
                    // amplua: 'Outside Hitter',
                    // date_of_birth: '',
                    // number: 18,
                    // team: '',
                    // rank: '',
                },
            ],

            pagination: {
                page: 1,
                per_page: 10,
                pages: 8,
            },
        });
    }

    getUser(): Observable<UTypes.IUser> {
        return new BehaviorSubject({
                fname: 'Bob',
                lname: 'Dilan',
                pname: 'Valerievich',
                email:'pavel@gmail.com',
                sex: UTypes.ESex.MALE,
                notifications: {
                    news: {
                        enabled: true,
                        fivb: false,
                    },
                }
            }
        );
    }
}
