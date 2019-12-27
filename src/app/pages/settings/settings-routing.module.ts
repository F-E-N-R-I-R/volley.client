import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsPageComponent } from '@settings/settings.page';
import { NotificationsPage } from '@settings//notifications/notifications.page';
import { LanguagePage } from '@settings/language/language.page';
import { ThemePage } from '@settings/theme/theme.page';
import { CityPage } from '@settings/city/city.page';
import { CategoryPage } from '@settings/category/category.page';
import { MainInfoPage } from '@settings/main-info/main-info.page';
import { PersonalPage } from '@settings/personal/personal.page';
import { TeamsPage } from '@settings/teams/teams.page';
import { PlacesPage } from '@settings/places/places.page';


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
