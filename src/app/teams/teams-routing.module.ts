import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamsItemPage} from '@teams/pages/teams-item/teams-item.page';
import { TeamsListPage } from '@teams/pages/teams-list/teams-list.page';

const routes: Routes = [
    { path: '', component: TeamsListPage },
    { path: ':id', component: TeamsItemPage },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [],
    exports: [RouterModule],
})
export class TeamsRoutingModule {
}
