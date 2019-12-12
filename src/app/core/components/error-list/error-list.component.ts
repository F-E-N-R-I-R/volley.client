import { Component, Input } from '@angular/core';

import { NgControl } from '@angular/forms';

@Component({
    selector: 'app-list-feedback',
    templateUrl: './error-list.component.html',
})
export class ErrorListComponent {
    @Input() control: NgControl;
    constructor() {
    }
}
