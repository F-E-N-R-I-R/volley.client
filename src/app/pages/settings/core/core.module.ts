import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SettingsFormService } from './services/settings-form.service';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [],
    exports: [],
    providers: [
        SettingsFormService,
    ],
})
export class SettingsCoreModule {
}
