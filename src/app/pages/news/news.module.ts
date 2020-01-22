import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewsListPage } from '@news/list/news-list.page';
import { NewsRoutingModule } from '@news/news-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { NewsCoreModule } from '@news/core/core.module';
import { AuthModule } from '@app/pages/auth/auth.module';
import { FiltersModalComponent } from '@news/filters/filters.modal';
import { NewItemPage } from '@news/new-item/new-item.page';


@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        NewsRoutingModule,
        TranslateModule,
        NewsCoreModule,
        AuthModule,
    ],
  declarations: [
      NewsListPage,
      FiltersModalComponent,
      NewItemPage
  ],
  entryComponents: [
      FiltersModalComponent
  ],
})
export class NewsModule {}
