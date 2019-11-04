import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { AuthCoreModule } from '@app/pages/auth/core/core.module';
import { AdditionalInfoPage } from '@app/pages/settings/additional/additional-info.page';
import { NotificationsPage } from '@app/pages/settings/notifications/notifications.page';
import { SettingsPageComponent } from '@app/pages/settings/settings.page';
import { SettingsRoutingModule } from '@app/pages/settings/settings-routing.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        SettingsRoutingModule,
        TranslateModule,
        ReactiveFormsModule,
        AuthCoreModule,
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
