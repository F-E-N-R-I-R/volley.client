import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SettingsFormService } from '@app/pages/settings/core/services/settings-form.service';
import { AuthService } from '@app/pages/auth/core/services/auth.service';

@Component({
    templateUrl: 'notifications.page.html',
    styleUrls: ['notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
    public form = this.settingsFormService.form.get('notifications') as FormGroup;
    public all: boolean;

    constructor(private authService: AuthService, private settingsFormService: SettingsFormService) {
    }

    ngOnInit(): void {
        this.form.valueChanges.subscribe((value) => {
            this.all = Object.values(value).every(Boolean);
        });
    }

    public ionViewWillLeave() {
        this.authService.dispatchSilentUpdate(this.settingsFormService.form.value);
    }

    public onAllToggle($e) {
        const notificationGroup = this.form as FormGroup;

        Object.keys(notificationGroup.controls).forEach(controlName => {
            notificationGroup.controls[controlName].setValue($e.detail.checked);
        });
    }
}
