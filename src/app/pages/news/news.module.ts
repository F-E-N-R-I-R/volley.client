import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewsListPage } from './list/news-list.page';
import { SettingsModalComponent } from './settings/settings.modal';
import { NewsRoutingModule } from './news-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { NewsCoreModule } from './core/core.module';


@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        NewsRoutingModule,
        TranslateModule,
        NewsCoreModule,
    ],
  declarations: [NewsListPage, SettingsModalComponent],
  entryComponents: [SettingsModalComponent],
})
export class NewsModule {}
