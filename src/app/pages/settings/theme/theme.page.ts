import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SettingsFormService } from '@app/pages/settings/core/services/settings-form.service';
import { AuthService } from '@app/pages/auth/core/services/auth.service';
import { ThemeService } from '@app/services';
import { UTypes } from '@app/pages/users/core/types/users.types';

@Component({
    templateUrl: 'theme.page.html',
    styleUrls: ['theme.page.scss'],
})
export class ThemePage {
    public form = this.settingsFormService.form as FormGroup;
    public UTypes = UTypes;

    constructor(private authService: AuthService, private settingsFormService: SettingsFormService, private themeService: ThemeService) {
    }

    public onThemeSelected($event) {
        this.themeService.changeTheme($event.detail.value);
        this.authService.dispatchSilentUpdate(this.settingsFormService.form.value);
    }
}
