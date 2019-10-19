import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CompetitionsListPage } from './list/competitions-list.page';
import { CompetitionsRoutingModule } from './competitions-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { CompetitionsCoreModule } from './core/core.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        CompetitionsRoutingModule,
        TranslateModule,
        CompetitionsCoreModule,
    ],
  declarations: [CompetitionsListPage]
})
export class CompetitionsModule {}
