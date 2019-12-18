import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SettingsFormService } from '@app/pages/settings/core/services/settings-form.service';
import { AuthService } from '@app/pages/auth/core/services/auth.service';
import { PersonalService } from '@app/pages/settings/core/services/personal.service';
import { UTypes } from '@app/pages/users/core/types/users.types';


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