import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsPageComponent } from './settings.page';
import { AdditionalInfoPage } from '@app/pages/settings/additional/additional-info.page';
import { NotificationsPage } from '@app/pages/settings//notifications/notifications.page';
import { LanguagePage } from '@app/pages/settings/language/language.page';
import { ThemePage } from '@app/pages/settings/theme/theme.page';
import { CityPage } from '@app/pages/settings/city/city.page';
import { GenderPage } from '@app/pages/settings/gender/gender.page';
import { MainInfoPage } from '@app/pages/settings/main-info/main-info.page';
import { BodySizesPage } from '@app/pages/settings/body-sizes/body-sizes.page'
import { TeamsPage} from '@app/pages/settings/teams/teams.page'


const routes: Routes = [
    {
        path: '',
        component: SettingsPageComponent,
    },
    {
        path: 'additional',
        component: AdditionalInfoPage,
    },
    {
        path: 'notifications',
        component: NotificationsPage,
    },
    {
        path: 'language',
        component: LanguagePage,
    },
    {
        path: 'theme',
        component: ThemePage,
    },
    {
        path: 'city',
        component: CityPage,
    },
    {
        path: 'gender',
        component: GenderPage,
    },
    {
        path: 'main-info',
        component: MainInfoPage,
    },
    {
        path: 'body-sizes',
        component: BodySizesPage,
    },
    {
        path: 'teams',
        component: TeamsPage,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [],
    exports: [RouterModule],
})
export class SettingsRoutingModule {
}
