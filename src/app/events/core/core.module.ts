import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EventsProvider } from '@events/core/providers';

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
