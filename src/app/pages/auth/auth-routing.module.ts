import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login/login.page';

const routes: Routes = [
    { path: '', component: LoginPage },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [],
    exports: [RouterModule],
})
export class AuthRoutingModule {
}
