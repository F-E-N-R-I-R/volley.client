import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsModalComponent } from '@app/pages/settings/settings.modal';
import { IonicModule } from '@ionic/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { TabsSettingsComponent } from '@app/pages/settings/tabs/tabs.settings';
import { SettingsCoreModule } from '@app/pages/settings/core/core.module';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
        TranslateModule,
        ReactiveFormsModule,
        SettingsCoreModule,
    ],
    declarations: [SettingsModalComponent, TabsSettingsComponent],
    exports: [],
    providers: [],
    entryComponents: [SettingsModalComponent],
})
export class SettingsModule {
}
