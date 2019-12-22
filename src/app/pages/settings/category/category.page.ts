import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SettingsFormService } from '@app/pages/settings/core/services/settings-form.service';
import { AuthService } from '@app/pages/auth/core/services/auth.service';
import { CategoryService } from '@app/pages/settings/core/services/category.service';
import { UTypes } from '@app/pages/users/core/types/users.types';

@Component({
    templateUrl: 'category.page.html',
    styleUrls: ['category.page.scss'],
})
export class CategoryPage {
    public form = this.settingsFormService.form as FormGroup;
    public categories : UTypes.ICategory[] = this.categoryService.categories;

    constructor(private authService: AuthService,
     private settingsFormService: SettingsFormService,
     private categoryService: CategoryService) {
    }

    public ionViewWillLeave() {
        this.authService.dispatchSilentUpdate(this.settingsFormService.form.value);
    }
}
