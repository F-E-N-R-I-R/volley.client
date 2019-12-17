import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SettingsFormService } from '@app/pages/settings/core/services/settings-form.service';
import { AuthService } from '@app/pages/auth/core/services/auth.service';
import { EnumValues } from 'enum-values';
import { UTypes } from '@app/pages/users/core/types/users.types';
@Component({
    templateUrl: 'city.page.html',
    styleUrls: ['city.page.scss'],
})
export class CityPage {
    public form = this.settingsFormService.form as FormGroup;

    constructor(private authService: AuthService, private settingsFormService: SettingsFormService) {
    }

    public ionViewWillLeave() {
        this.authService.dispatchSilentUpdate(this.settingsFormService.form.value);
    }
}
