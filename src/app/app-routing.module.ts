import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/guards';

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
        path: 'users',
        canActivate: [AuthGuard],
        loadChildren: './pages/users/users.module#UsersModule',
    },
    {
        path: 'competitions',
        canActivate: [AuthGuard],
        loadChildren: './pages/competitions/competitions.module#CompetitionsModule',
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
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
