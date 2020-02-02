import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NewsListPage } from '@news/pages/list/news-list.page';
import { NewsRoutingModule } from '@news/news-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { NewsCoreModule } from '@news/core/core.module';
import { AuthModule } from '@auth/auth.module';
import { FiltersModalComponent } from '@news/pages/filters/filters.modal';
import { NewsListItemComponent } from '@news/components/list-item/news-list-item.component';
import { NewsItemPageComponent } from '@news/pages/item/news-item-page.component';
import { NewsEditModalComponent} from '@news/pages/edit/news-edit-modal.component';


@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        NewsRoutingModule,
        TranslateModule,
        NewsCoreModule,
        AuthModule,
        ReactiveFormsModule,
    ],
    declarations: [
        NewsEditModalComponent,
        NewsListPage,
        NewsListItemComponent,
        NewsItemPageComponent,
        FiltersModalComponent,
    ],
    entryComponents: [
        NewsItemPageComponent,
        FiltersModalComponent,
        NewsEditModalComponent
    ],
})
export class NewsModule {
}
