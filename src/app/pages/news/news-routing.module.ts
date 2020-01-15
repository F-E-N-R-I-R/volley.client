import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsListPage } from '@news/list/news-list.page';
import { FiltersPage } from '@news/filters/filters.page';
import { NewItemPage } from '@news/new-item/new-item.page';
import { FullNewsPage} from '@news/full-news/full-news.page';

const routes: Routes = [
    {
        path: '',
        component: NewsListPage
    },
    {
        path: 'filters',
        component: FiltersPage,
    },
    {
        path: 'new',
        component: NewItemPage,
    },
    {
        path: 'full',
        component: FullNewsPage,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [],
    exports: [RouterModule],
})
export class NewsRoutingModule {
}
