import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsListPage } from './list/events-list.page';

const routes: Routes = [
    { path: '', component: EventsListPage },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [],
    exports: [RouterModule],
})
export class EventsRoutingModule {
}
