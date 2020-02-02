import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsPageComponent } from '@settings/pages/settings/settings.page';
import { NotificationsPage } from '@settings/pages/notifications/notifications.page';
import { LanguagePage } from '@settings/pages/language/language.page';
import { ThemePage } from '@settings/pages/theme/theme.page';
import { CityPage } from '@settings/pages/city/city.page';
import { CategoryPage } from '@settings/pages/category/category.page';
import { MainInfoPage } from '@settings/pages/main-info/main-info.page';
import { PersonalPage } from '@settings/pages/personal/personal.page';
import { TeamsPage } from '@settings/pages/teams/teams.page';
import { PlacesPage } from '@settings/pages/places/places.page';
import { EventsPage } from '@settings/pages/events/events.page';


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
    {
        path: 'events',
        component: EventsPage,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [],
    exports: [RouterModule],
})
export class SettingsRoutingModule {
}
