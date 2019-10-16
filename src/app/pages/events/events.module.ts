import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventsListPage } from './list/events-list.page';
import { EventsRoutingModule } from './events-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        EventsRoutingModule,
        TranslateModule,
    ],
  declarations: [EventsListPage]
})
export class EventsModule {}
