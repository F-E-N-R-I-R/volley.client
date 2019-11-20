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
        date_of_birth: ['2019-11-20'],
        language: [UTypes.ELanguage.ENGLISH],
        theme: [UTypes.ETheme.BLACK],
        avatar: ['assets/icon/logo.png'],

        // Additional Info
        lname: [''],
        pname: [''],
        email: [''],
        height: [null],
        weight: [null],
        chest_girt: [null],
        waist: [null],
        hip_girth: [null],
        shoe_size: [null],
        sports_category: [''],
        teams: this.fb.array([]),
        places: [''],

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
