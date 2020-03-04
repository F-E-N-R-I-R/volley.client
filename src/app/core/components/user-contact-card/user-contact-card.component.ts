import { Component, Input } from '@angular/core';
import { UTypes } from '@core/types';
import { Router } from '@angular/router';


@Component({
    selector: 'app-user-contact-card',
    templateUrl: 'user-contact-card.component.html',
    styleUrls: ['user-contact-card.component.scss'],
})

export class UserContactCardComponent {
    constructor(private router: Router) {
    }
}
