import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SettingsFormService } from '@settings/core/services';
import { AuthService } from '@auth/core/services';
import { UTypes } from '@core/types';
import { EnumValues } from 'enum-values';

@Component({
    templateUrl: 'city.page.html',
    styleUrls: ['city.page.scss'],
})
export class CityPage {
    public form = this.settingsFormService.form as FormGroup;
    public cities = EnumValues.getNames(UTypes.ECity);

    constructor(private authService: AuthService, private settingsFormService: SettingsFormService) {
    }

    public ionViewWillLeave() {
        this.authService.dispatchSilentUpdate(this.settingsFormService.form.value);
    }
}
