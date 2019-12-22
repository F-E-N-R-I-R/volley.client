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
        loadChildren: './pages/auth/auth.module#AuthModule',
    },
    {
        path: 'news',
        canActivate: [AuthGuard],
        loadChildren: './pages/news/news.module#NewsModule',
    },
    {
        path: 'events',
        canActivate: [AuthGuard],
        loadChildren: './pages/events/events.module#EventsModule',
    },
    {
        path: 'teams',
        canActivate: [AuthGuard],
        loadChildren: './pages/teams/teams.module#TeamsModule',
    },
    {
        path: 'settings',
        canActivate: [AuthGuard],
        loadChildren: './pages/settings/settings.module#SettingsModule',
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
