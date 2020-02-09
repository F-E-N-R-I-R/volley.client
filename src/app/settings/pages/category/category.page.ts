import { EnumValues } from 'enum-values';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SettingsFormService } from '@settings/core/services';
import { AuthService } from '@auth/core/services';
import { UTypes } from '@core/types';

@Component({
    templateUrl: 'category.page.html',
    styleUrls: ['category.page.scss'],
})
export class CategoryPage {
    public form = this.settingsFormService.form as FormGroup;
    public categories = EnumValues.getNames(UTypes.ECategory);

    constructor(private authService: AuthService, private settingsFormService: SettingsFormService) {
    }

    public ionViewWillLeave() {
        this.authService.dispatchSilentUpdate(this.settingsFormService.form.value);
    }
}
