import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SettingsFormService } from './services/settings-form.service';
import { PersonalService } from './services/personal.service';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [],
    exports: [],
    providers: [
        SettingsFormService,
        PersonalService,
    ],
})
export class SettingsCoreModule {
}
