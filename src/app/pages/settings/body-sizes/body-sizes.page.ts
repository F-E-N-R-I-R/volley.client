import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SettingsFormService } from '@app/pages/settings/core/services/settings-form.service';
import { AuthService } from '@app/pages/auth/core/services/auth.service';

@Component({
    templateUrl: 'body-sizes.page.html',
    styleUrls: ['body-sizes.page.scss'],
})
export class BodySizesPage {
    public form = this.settingsFormService.form as FormGroup;

    constructor(private authService: AuthService, private settingsFormService: SettingsFormService) {
    }

    public ionViewWillLeave() {
        this.authService.dispatchSilentUpdate(this.settingsFormService.form.value);
    }
}

