import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SettingsFormService } from '@app/pages/auth/core/services/settings-form.service';
import { AuthService } from '@app/pages/auth/core/services/auth.service';

@Component({
    templateUrl: 'additional-info.page.html',
    styleUrls: ['additional-info.page.scss']
})
export class AdditionalInfoPage {
    public form = this.settingsFormService.form as FormGroup;

    constructor(private authService: AuthService, private settingsFormService: SettingsFormService) {
    }

    public ionViewWillLeave() {
    }
}
