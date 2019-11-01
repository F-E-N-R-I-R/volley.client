import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UTypes } from '@app/pages/users/core/types/users.types';

@Injectable()
export class SettingsFormService {
    public form = this.fb.group({
        // Main Info
        fname: [''],
        gender: [UTypes.EGender.MALE],
        phone: [null],
        city: [UTypes.ECity.KHARKOV],
        date_of_birth: [new Date()],
        language: [UTypes.ELanguage.EN],
        theme: [UTypes.ETheme.BLACK],
        avatar: ['path to default avatar '],

        // Additional Info
        lname: [''],
        pname: [''],
        email: [''],

        // Notifications
        notifications: this.fb.group({
            news: [false],
            team: [false],
            events: [false],
            competitions: [false],
        }),
    });

    constructor(private fb: FormBuilder) {
    }
}
