import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SettingsFormService } from '@app/pages/auth/core/services/settings-form.service';
import { AuthService } from '@app/pages/auth/core/services/auth.service';

@Component({
    templateUrl: 'notifications.page.html',
    styleUrls: ['notifications.page.scss'],
})
export class NotificationsPage {
    public form = this.settingsFormService.form.get('notifications') as FormGroup;

    constructor(private authService: AuthService, private settingsFormService: SettingsFormService) {
    }

    public ionViewWillLeave() {
    }

    public onAllToggle($e) {
        const notificationGroup = this.form as FormGroup;

        Object.keys(notificationGroup.controls).forEach(controlName => {
            notificationGroup.controls[controlName].setValue($e.detail.checked);
        });
    }
}
