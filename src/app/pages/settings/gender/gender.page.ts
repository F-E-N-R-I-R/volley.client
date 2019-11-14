import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SettingsFormService } from '@app/pages/settings/core/services/settings-form.service';
import { AuthService } from '@app/pages/auth/core/services/auth.service';
import { UTypes } from '@app/pages/users/core/types/users.types';
import { EnumValues } from 'enum-values';

@Component({
    templateUrl: 'gender.page.html',
    styleUrls: ['gender.page.scss'],
})
export class GenderPage {
    public UTypes = UTypes;
    public EnumValues = EnumValues;
    public form = this.settingsFormService.form as FormGroup;

    constructor(private authService: AuthService, private settingsFormService: SettingsFormService) {
    }

    public ionViewWillLeave() {
        this.authService.dispatchSilentUpdate(this.settingsFormService.form.value);
    }
}
