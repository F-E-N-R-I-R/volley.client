import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersListPage } from './list/users-list.page';

const routes: Routes = [
    { path: '', component: UsersListPage },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [],
    exports: [RouterModule],
})
export class UsersRoutingModule {
}
