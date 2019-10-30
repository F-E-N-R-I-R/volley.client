import { Component } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
    selector: 'app-notifications-tab',
    templateUrl: 'notifications-tab.component.html',
    styleUrls: ['notifications-tab.component.scss']
})
export class NotificationsTabComponent {
    public form: FormGroup = this.parentGroup.form.get('notifications.news') as FormGroup;

    constructor(public parentGroup: FormGroupDirective) {
    }
}
