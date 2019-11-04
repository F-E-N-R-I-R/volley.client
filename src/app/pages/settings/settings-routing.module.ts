import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsPageComponent } from './settings.page';
import { AdditionalInfoPage } from '@app/pages/settings/additional/additional-info.page';
import { NotificationsPage } from '@app/pages/settings//notifications/notifications.page';

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
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [],
    exports: [RouterModule],
})
export class SettingsRoutingModule {
}
