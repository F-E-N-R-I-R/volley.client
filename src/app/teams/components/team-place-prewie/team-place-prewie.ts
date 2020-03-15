import { Component, Input } from '@angular/core';
import { UTypes } from '@core/types';
import { Router } from '@angular/router';


@Component({
    selector: 'app-team-place-prewie',
    templateUrl: 'team-place-prewie.html',
    styleUrls: ['team-place-prewie.scss'],
})

// tslint:disable-next-line:component-class-suffix
export class TeamPlacePrewie {
    constructor(private router: Router) {
    }
}
