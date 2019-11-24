import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsPageComponent } from './settings.page';
import { NotificationsPage } from '@app/pages/settings//notifications/notifications.page';
import { LanguagePage } from '@app/pages/settings/language/language.page';
import { ThemePage } from '@app/pages/settings/theme/theme.page';
import { CityPage } from '@app/pages/settings/city/city.page';
import { CategoryPage } from '@app/pages/settings/category/category.page';
import { MainInfoPage } from '@app/pages/settings/main-info/main-info.page';
import { PersonalPage } from '@app/pages/settings/personal/personal.page'
import { TeamsPage} from '@app/pages/settings/teams/teams.page'
import { PlacesPage } from '@app/pages/settings/places/places.page';


const routes: Routes = [
    {
        path: '',
        component: SettingsPageComponent,
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
        path: 'category',
        component: CategoryPage,
    },
    {
        path: 'main-info',
        component: MainInfoPage,
    },
    {
        path: 'personal',
        component: PersonalPage,
    },
    {
        path: 'teams',
        component: TeamsPage,
    },
    {
        path: 'places',
        component: PlacesPage,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [],
    exports: [RouterModule],
})
export class SettingsRoutingModule {
}
