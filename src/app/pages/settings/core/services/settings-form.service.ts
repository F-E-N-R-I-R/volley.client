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
        }),
        additional: this.fb.group({
            pname: [''],
        }),
        notifications: this.fb.group({
            news: [true],
        }),
    });

    constructor(private fb: FormBuilder, public authService: AuthService) {
        this.user$.subscribe(user => this.patchUser(user));
    }

    private patchUser(user: UTypes.IUser) {
        this.form.patchValue(
            {
                main: {
                    fname: user.fname,
                    lname: user.lname
                },
                additional: {
                    pname: user.pname,
                },
                notifications: user.notifications,
            },
        );
    }
}
