import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ActivitiesProvider } from '@activities/core/providers';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [],
    exports: [],
    providers: [
        ActivitiesProvider,
    ],
})
export class ActivitiesCoreModule {
}
