import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPage } from './login/login.page';
import { AuthRoutingModule } from './auth-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { AuthCoreModule } from '@app/pages/auth/core/core.module';
import { AdditionalInfoTabComponent } from '@app/pages/auth/components/aditional-info-tab/additional-info-tab.component';
import { NotificationsTabComponent } from '@app/pages/auth/components/notifications-tab/notifications-tab.component';
import { MainTabComponent } from '@app/pages/auth/components/main-tab/main-tab.component';
import { SettingsModalComponent } from '@app/pages/auth/settings/settings.modal';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        AuthRoutingModule,
        TranslateModule,
        ReactiveFormsModule,
        AuthCoreModule,
    ],
    declarations: [LoginPage, AdditionalInfoTabComponent, NotificationsTabComponent, MainTabComponent, SettingsModalComponent],
    entryComponents: [SettingsModalComponent],
})
export class AuthModule {
}
