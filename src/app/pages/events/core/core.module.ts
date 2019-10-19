import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EventsProvider } from './providers/events.provider';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [],
    exports: [],
    providers: [
        EventsProvider,
    ],
})
export class EventsCoreModule {
}
