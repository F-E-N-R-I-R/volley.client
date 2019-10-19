import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TeamsListPage } from './list/teams-list.page';
import { TeamsRoutingModule } from './teams-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { TeamsCoreModule } from './core/core.module';


@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        TeamsRoutingModule,
        TranslateModule,
        TeamsCoreModule
    ],
  declarations: [TeamsListPage]
})
export class TeamsModule {}
