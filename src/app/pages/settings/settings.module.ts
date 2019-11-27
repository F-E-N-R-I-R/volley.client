import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { AuthCoreModule } from '@app/pages/auth/core/core.module';
import { SettingsRoutingModule } from '@app/pages/settings/settings-routing.module';
import { SettingsCoreModule } from '@app/pages/settings/core/core.module';
import { NotificationsPage } from '@app/pages/settings/notifications/notifications.page';
import { ThemePage } from '@app/pages/settings/theme/theme.page';
import { LanguagePage } from '@app/pages/settings/language/language.page';
import { SettingsPageComponent } from '@app/pages/settings/settings.page';
import { CityPage } from '@app/pages/settings/city/city.page';
import { CategoryPage } from '@app/pages/settings/category/category.page';
import { MainInfoPage } from '@app/pages/settings/main-info/main-info.page';
import { PersonalPage } from '@app/pages/settings/personal/personal.page';
import { TeamsPage} from '@app/pages/settings/teams/teams.page';
import { PlacesPage} from '@app/pages/settings/places/places.page';
import { AppCoreModule } from '@app/core/app.core.module';


@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        SettingsRoutingModule,
        TranslateModule,
        ReactiveFormsModule,
        SettingsCoreModule,
        AuthCoreModule,
        AppCoreModule,
    ],
    declarations: [
        SettingsPageComponent,
        NotificationsPage,
        ThemePage,
        LanguagePage,
        CityPage,
        CategoryPage,
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
