import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsListPage } from '@news/list/news-list.page';
import { FiltersPage } from '@news/filters/filters.page';
import { NewsItemPageComponent} from '@news/item/news-item-page.component';

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
        path: ':id',
        component: NewsItemPageComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [],
    exports: [RouterModule],
})
export class NewsRoutingModule {
}
