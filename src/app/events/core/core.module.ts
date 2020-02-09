import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EventsProvider } from '@events/core/providers';
import { StoreModule } from '@ngrx/store';
import { reducers } from '@events/core/reducers';
import { EffectsModule } from '@ngrx/effects';
import { effect } from '@events/core/effects';
import { EventsService } from '@events/core/services';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('eventsList', reducers),
        StoreModule.forFeature('eventsFilters', reducers),
        EffectsModule.forFeature(effect),
    ],
    declarations: [],
    exports: [],
    providers: [
        EventsProvider,
        EventsService,
    ],
})
export class EventsCoreModule {
}
