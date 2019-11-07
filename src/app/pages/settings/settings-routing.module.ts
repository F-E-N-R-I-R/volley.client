import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsPageComponent } from './settings.page';
import { AdditionalInfoPage } from '@app/pages/settings/additional/additional-info.page';
import { NotificationsPage } from '@app/pages/settings//notifications/notifications.page';
import { LanguagePage } from '@app/pages/settings/language/language.page';
import { ThemePage } from '@app/pages/settings/theme/theme.page';

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
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [],
    exports: [RouterModule],
})
export class SettingsRoutingModule {
}
