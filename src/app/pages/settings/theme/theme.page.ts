import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SettingsFormService } from '@app/pages/settings/core/services/settings-form.service';
import { AuthService } from '@app/pages/auth/core/services/auth.service';
import { ThemeService } from '@app/services';

@Component({
    templateUrl: 'theme.page.html',
    styleUrls: ['theme.page.scss'],
})
export class ThemePage {
    public form = this.settingsFormService.form as FormGroup;

    constructor(private authService: AuthService, private settingsFormService: SettingsFormService, private themeService: ThemeService) {
    }

    public onThemeSelected($event) {
        this.themeService.changeTheme($event.detail.value);
    }
}
