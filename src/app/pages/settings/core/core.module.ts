import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SettingsFormService, PersonalService } from '@settings/core/services';


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
