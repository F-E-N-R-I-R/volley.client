import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivitiesListPage } from '@activities/pages/list/activities-list.page';
import { ActivitiesRoutingModule } from '@activities/activities-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { ActivitiesCoreModule } from '@activities/core/core.module';


@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ActivitiesRoutingModule,
        TranslateModule,
        ActivitiesCoreModule,
    ],
  declarations: [ActivitiesListPage]
})
export class ActivitiesModule {}
