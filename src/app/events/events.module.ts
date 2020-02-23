import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventsListPage } from '@events/pages/list/events-list.page';
import { EventsRoutingModule } from '@events/events-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { EventsCoreModule } from '@events/core/core.module';
import { EventsListItemComponent } from '@events/components/events-list-item/events-list-item.component';
import { EventsItemPage } from '@events/pages/events-item/events-item.page';
import { AppCoreModule } from '@core/app.core.module';


@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        EventsRoutingModule,
        TranslateModule,
        EventsCoreModule,
        AppCoreModule,
    ],
    declarations: [
        EventsListPage,
        EventsItemPage,
        EventsListItemComponent,
    ],
})
export class EventsModule {
}
