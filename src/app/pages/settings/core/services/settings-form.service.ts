import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { UTypes } from '@app/pages/users/core/types/users.types';
import { AuthService } from '@app/pages/auth/core/services/auth.service';

@Injectable()
export class SettingsFormService {
    public user$: Observable<UTypes.IUser> = this.authService.user$;
    public form = this.fb.group({
        // Main Info
        fname: [''],

        // Additional Info
        lname: [''],
        sex: [UTypes.ESex.MALE],
        pname: [''],
        email: [''],

        // Notifications
        notifications: this.fb.group({
            news: [false],
            team: [false],
        }),
    });

    constructor(private fb: FormBuilder, public authService: AuthService) {
        this.user$.subscribe(user => this.form.setValue(user));
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
