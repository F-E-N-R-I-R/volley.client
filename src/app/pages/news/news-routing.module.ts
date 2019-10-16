import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsListPage } from './list/news-list.page';

const routes: Routes = [
    { path: '', component: NewsListPage },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [],
    exports: [RouterModule],
})
export class NewsRoutingModule {
}
