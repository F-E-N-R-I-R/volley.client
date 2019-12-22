import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { AuthCoreModule } from '@auth/core/core.module';
import { SettingsRoutingModule } from '@settings/settings-routing.module';
import { SettingsCoreModule } from '@settings/core/core.module';
import { NotificationsPage } from '@settings/notifications/notifications.page';
import { ThemePage } from '@settings/theme/theme.page';
import { LanguagePage } from '@settings/language/language.page';
import { SettingsPageComponent } from '@settings/settings.page';
import { CityPage } from '@settings/city/city.page';
import { CategoryPage } from '@settings/category/category.page';
import { MainInfoPage } from '@settings/main-info/main-info.page';
import { PersonalPage } from '@settings/personal/personal.page';
import { TeamsPage } from '@settings/teams/teams.page';
import { PlacesPage } from '@settings/places/places.page';
import { AppCoreModule } from '@core/app.core.module';
import { SqIconComponent } from '@settings/components/sq-icon/sq-icon.component';

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
        SqIconComponent,
    ],
    entryComponents: [],
    providers: []
})
export class SettingsModule {
}
