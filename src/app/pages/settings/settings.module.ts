import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { AdditionalInfoPage } from '@app/pages/settings/additional/additional-info.page';
import { NotificationsPage } from '@app/pages/settings/notifications/notifications.page';
import { SettingsPageComponent } from '@app/pages/settings/settings.page';
import { SettingsRoutingModule } from '@app/pages/settings/settings-routing.module';
import { SettingsCoreModule } from '@app/pages/settings/core/core.module';


@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        SettingsRoutingModule,
        TranslateModule,
        ReactiveFormsModule,
        SettingsCoreModule,
    ],
    declarations: [
        SettingsPageComponent,
        AdditionalInfoPage,
        NotificationsPage,
    ],
    entryComponents: [],
    providers: []
})
export class SettingsModule {
}
