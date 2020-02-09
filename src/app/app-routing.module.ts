import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guards';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        loadChildren: './auth/auth.module#AuthModule',
    },
    {
        path: 'news',
        canActivate: [AuthGuard],
        loadChildren: './news/news.module#NewsModule',
    },
    {
        path: 'events',
        canActivate: [AuthGuard],
        loadChildren: './events/events.module#EventsModule',
    },
    {
        path: 'teams',
        canActivate: [AuthGuard],
        loadChildren: './teams/teams.module#TeamsModule',
    },
    {
        path: 'settings',
        canActivate: [AuthGuard],
        loadChildren: './settings/settings.module#SettingsModule',
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
