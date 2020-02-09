import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ActivitiesProvider } from '@activities/core/providers';
import { StoreModule } from '@ngrx/store';
import { reducers } from '@activities/core/reducers';
import { EffectsModule } from '@ngrx/effects';
import { effects } from '@activities/core/effects';
import { ActivitiesService } from '@activities/core/services';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('activities', reducers),
        EffectsModule.forFeature(effects),
    ],
    declarations: [],
    exports: [],
    providers: [
        ActivitiesProvider,
        ActivitiesService,

    ],
})
export class ActivitiesCoreModule {
}
