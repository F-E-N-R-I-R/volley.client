import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsModalComponent } from '@app/pages/settings/settings.modal';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SettingsCoreModule } from '@app/pages/settings/core/core.module';
import { AdditionalInfoTabComponent } from "@app/pages/settings/components/aditional-info-tab/additional-info-tab.component";
import { NotificationsTabComponent } from "@app/pages/settings/components/notifications-tab/notifications-tab.component";
import {MainTabComponent} from "@app/pages/settings/components/main-tab/main-tab.component";

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
        TranslateModule,
        ReactiveFormsModule,
        SettingsCoreModule,
    ],
    declarations: [SettingsModalComponent, AdditionalInfoTabComponent, NotificationsTabComponent,MainTabComponent],
    exports: [],
    providers: [],
    entryComponents: [SettingsModalComponent],
})
export class SettingsModule {
}
