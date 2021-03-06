import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { UTypes } from '@core/types';

@Injectable()
export class SettingsFormService {
    public form = this.fb.group({
        // Main Info
        fname: ['', [Validators.required, Validators.maxLength(32), Validators.pattern(/^[a-zA-Z\u0430-\u044fЄєІіґҐЇї\']+$/)]],
        gender: [UTypes.EGender.MALE],
        phone: [null],
        city: [UTypes.ECity.KHARKOV],
        date_of_birth: ['2019-11-20'],
        language: [UTypes.ELanguage.UKRAINIAN],
        theme: [UTypes.ETheme.BLACK],
        avatar: ['assets/icon/logo.png'],

        // Additional Info
        lname: ['', [Validators.required, Validators.maxLength(32), Validators.pattern(/^[a-zA-Z\u0430-\u044fЄєІіґҐЇї\']+$/)]],
        pname: ['', [Validators.pattern(/^[a-zA-Z\u0430-\u044fЄєІіґҐЇї\']+$/)]],
        email: [''],
        height: [null],
        weight: [null],
        chest_girt: [null],
        waist: [null],
        hip_girth: [null],
        shoe_size: [null],
        sports_category: [''],
        teams: this.fb.array([]),
        places: this.fb.array([]),
        events: this.fb.array([]),

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

    public setValue(user) {
        this.fillTeams(user.teams);
        this.fillPlaces(user.places);
        this.fillEvents(user.events);
        this.form.setValue(user);
    }

    private fillTeams(teams) {
        const teamsArray = this.form.get('teams') as FormArray;

        while (teamsArray.length > 0) {
            teamsArray.removeAt(0);
        }

        teams.forEach(
            team => teamsArray.push(
                this.fb.group({
                    name: [team.name],
                    image: [team.image],
                })
            )
        );
    }

    private fillPlaces(places) {
        const placesArray = this.form.get('places') as FormArray;

        while (placesArray.length > 0) {
            placesArray.removeAt(0);
        }

        places.forEach(
            place => placesArray.push(
                this.fb.group({
                    name: [place.name],
                    image: [place.image],
                })
            )
        );
    }

    private fillEvents(events) {
        const eventsArray = this.form.get('events') as FormArray;

        while (eventsArray.length > 0) {
            eventsArray.removeAt(0);
        }

        events.forEach(
            event => eventsArray.push(
                this.fb.group({
                    name: [event.name],
                    image: [event.image],
                })
            )
        );
    }
}
