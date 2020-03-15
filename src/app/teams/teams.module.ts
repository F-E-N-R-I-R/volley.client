import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TeamsListPage } from '@teams/pages/teams-list/teams-list.page';
import { TeamsRoutingModule } from '@teams/teams-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { TeamsCoreModule } from '@teams/core/core.module';
import { AppCoreModule } from '@core/app.core.module';
import { TeamsListItemComponent } from '@teams/components/teams-list-item/teams-list-item.component';
import { TeamsItemPage } from '@teams/pages/teams-item/teams-item.page';
import { TeamsEditModalComponent } from '@teams/pages/teams-edit/teams-edit-modal.component';
import { TeamPlacePrewie } from '@teams/components/team-place-prewie/team-place-prewie';



@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        TeamsRoutingModule,
        TranslateModule,
        TeamsCoreModule,
        AppCoreModule,
    ],
  declarations: [
      TeamsListPage,
      TeamsItemPage,
      TeamsListItemComponent,
      TeamsEditModalComponent,
      TeamPlacePrewie
  ],
    entryComponents: [
        TeamsEditModalComponent,
        TeamPlacePrewie,
    ],
})
export class TeamsModule {}
