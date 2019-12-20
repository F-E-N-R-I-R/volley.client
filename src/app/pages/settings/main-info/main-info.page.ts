import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SettingsFormService } from '@app/pages/settings/core/services/settings-form.service';
import { AuthService } from '@app/pages/auth/core/services/auth.service';
import { EnumValues } from 'enum-values';
import { UTypes } from '@app/pages/users/core/types/users.types';

@Component({
    templateUrl: 'main-info.page.html',
    styleUrls: ['main-info.page.scss'],
})
export class MainInfoPage {
    public form = this.settingsFormService.form as FormGroup;
    public genders = EnumValues.getValues(UTypes.EGender);
    public customActionSheetOptions = {
        color: 'primary',
            header: 'Pizza Toppings',
            subHeader: 'Select your toppings',
            message: '$1.00 per topping',
            translucent: true
    };

    constructor(private authService: AuthService, private settingsFormService: SettingsFormService) {
    }

    public ionViewWillLeave() {
        this.authService.dispatchSilentUpdate(this.settingsFormService.form.value);
        this.form.markAsPristine();
    }
}
