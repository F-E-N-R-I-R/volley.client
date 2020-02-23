import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsListPage } from '@events/pages/list/events-list.page';
import { EventsItemPage } from '@events/pages/events-item/events-item.page';

const routes: Routes = [
    {
        path: '',
        component: EventsListPage,
    },
    {
        path: ':id',
        component: EventsItemPage,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [],
    exports: [RouterModule],
})
export class EventsRoutingModule {
}
