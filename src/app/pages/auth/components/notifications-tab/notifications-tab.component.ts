import { Component } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
    selector: 'app-notifications-tab',
    templateUrl: 'notifications-tab.component.html',
    styleUrls: ['notifications-tab.component.scss']
})
export class NotificationsTabComponent {
    public form: FormGroup = this.parentGroup.form.get('notifications') as FormGroup;

    constructor(public parentGroup: FormGroupDirective) {
    }

    public onAllToggle($e) {
        const notificationGroup = this.parentGroup.form.get('notifications') as FormGroup;

        Object.keys(notificationGroup.controls).forEach(controlName => {
            notificationGroup.controls[controlName].setValue($e.detail.checked);
        });
    }
}
