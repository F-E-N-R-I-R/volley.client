import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SettingsFormService, PersonalService } from '@settings/core/services';
import { AuthService } from '@auth/core/services';
import { UTypes } from '@core/types';


@Component({
    templateUrl: 'personal.page.html',
    styleUrls: ['personal.page.scss'],
})

export class PersonalPage {
    public bodyParams: UTypes.IBodyParam[] = this.personalService.bodyParams;
    public form = this.settingsFormService.form as FormGroup;

    constructor(private authService: AuthService,
                private settingsFormService: SettingsFormService,
                private personalService: PersonalService) {
    }

    public ionViewWillLeave() {
        this.authService.dispatchSilentUpdate(this.settingsFormService.form.value);
    }
}
