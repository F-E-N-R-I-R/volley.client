import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsListPage } from '@news/list/news-list.page';
import { NewItemPage } from '@news/new-item/new-item.page';

const routes: Routes = [
    {
        path: '',
        component: NewsListPage
    },
    {
        path: 'new',
        component: NewItemPage,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [],
    exports: [RouterModule],
})
export class NewsRoutingModule {
}
