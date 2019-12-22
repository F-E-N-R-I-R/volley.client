import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SettingsFormService } from './services/settings-form.service';
import { PersonalService } from './services/personal.service';
import { CategoryService } from	'./services/category.service';


@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [],
    exports: [],
    providers: [
        SettingsFormService,
        PersonalService,
        CategoryService,
    ],
})
export class SettingsCoreModule {
}
