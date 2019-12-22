import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventsListPage } from '@events/list/events-list.page';
import { EventsRoutingModule } from '@events/events-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { EventsCoreModule } from '@events/core/core.module';


@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        EventsRoutingModule,
        TranslateModule,
        EventsCoreModule,
    ],
  declarations: [EventsListPage]
})
export class EventsModule {}
