import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { AuthCoreModule } from '@app/pages/auth/core/core.module';
import { SettingsRoutingModule } from '@app/pages/settings/settings-routing.module';
import { SettingsCoreModule } from '@app/pages/settings/core/core.module';
import { AdditionalInfoPage } from '@app/pages/settings/additional/additional-info.page';
import { NotificationsPage } from '@app/pages/settings/notifications/notifications.page';
import { ThemePage } from '@app/pages/settings/theme/theme.page';
import { LanguagePage } from '@app/pages/settings/language/language.page';
import { SettingsPageComponent } from '@app/pages/settings/settings.page';
import { CityPage } from '@app/pages/settings/city/city.page';
import { GenderPage } from '@app/pages/settings/gender/gender.page';
import { MainInfoPage } from '@app/pages/settings/main-info/main-info.page';
import { PersonalPage } from '@app/pages/settings/personal/personal.page';
import { TeamsPage} from '@app/pages/settings/teams/teams.page';
import { PlacesPage} from '@app/pages/settings/places/places.page';




@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        SettingsRoutingModule,
        TranslateModule,
        ReactiveFormsModule,
        SettingsCoreModule,
        AuthCoreModule
    ],
    declarations: [
        SettingsPageComponent,
        AdditionalInfoPage,
        NotificationsPage,
        ThemePage,
        LanguagePage,
        CityPage,
        GenderPage,
        MainInfoPage,
        PersonalPage,
        TeamsPage,
        PlacesPage,
    ],
    entryComponents: [],
    providers: []
})
export class SettingsModule {
}
