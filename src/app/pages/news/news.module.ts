import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NewsListPage } from '@news/list/news-list.page';
import { NewsRoutingModule } from '@news/news-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { NewsCoreModule } from '@news/core/core.module';
import { AuthModule } from '@app/pages/auth/auth.module';
import { FiltersModalComponent } from '@news/filters/filters.modal';
import { NewsListItemComponent } from '@news/components/list-item/news-list-item.component';
import { NewsItemPageComponent } from '@news/item/news-item-page.component';
import { NewsEditModal } from '@news/edit/news-edit-modal.component';


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
        NewsListPage,
        NewsListItemComponent,
        NewsItemPageComponent,
        NewsEditModal,
        FiltersModalComponent,
    ],
    entryComponents: [
        NewsEditModal,
        FiltersModalComponent
    ],
})
export class NewsModule {
}
