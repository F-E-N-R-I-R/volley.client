import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { UTypes } from '@app/pages/users/core/types/users.types';
import { AuthService } from '@app/pages/auth/core/services/auth.service';

@Injectable()
export class SettingsFormService {
    public user$: Observable<UTypes.IUser> = this.authService.user$;
    public form = this.fb.group({
        main: this.fb.group({
            fname: [''],
            lname: [''],
            sex: [UTypes.ESex.MALE]
        }),
        additional: this.fb.group({
            pname: [''],
            email: [''],
        }),
        notifications: this.fb.group({
            news: this.fb.group({
                isOn: [false],
                fivb: [false],
            }),
        }),
    });

    constructor(private fb: FormBuilder, public authService: AuthService) {
        this.user$.subscribe(user => this.patchUser(user));
    }

    private patchUser(user: UTypes.IUser) {
        this.form.setValue(
            {
                main: {
                    fname: user.fname,
                    lname: user.lname,
                    sex: user.sex,
                },
                additional: {
                    pname: user.pname,
                    email: user.email,
                },
                notifications: {
                    news: {
                        isOn: user.notifications.news.enabled,
                        fivb: user.notifications.news.fivb,
                    }
                },
            },
        );
    }

    public getFormUser() {
        return {
            fname: this.form.value.main.fname,
            lname: this.form.value.main.lname,
            pname: this.form.value.additional.pname,
            email: this.form.value.additional.email,
            sex: this.form.value.main.sex,
            notifications: {
                news: {
                    enabled: this.form.value.notifications.news.isOn,
                    fivb: this.form.value.notifications.news.fivb,
                },
            }
        };
    }
}
