import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UTypes } from '@app/pages/users/core/types/users.types';

@Injectable()
export class SettingsFormService {
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

    constructor(private fb: FormBuilder) {
    }
}
