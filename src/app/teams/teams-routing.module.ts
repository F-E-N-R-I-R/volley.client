import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamsListPage } from '@teams/pages/list/teams-list.page';

const routes: Routes = [
    { path: '', component: TeamsListPage },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [],
    exports: [RouterModule],
})
export class TeamsRoutingModule {
}
