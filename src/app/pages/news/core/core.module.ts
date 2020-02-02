import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { effects } from '@news/core/effects';
import { reducers } from '@news/core/reducers';
import { NewsService } from '@news/core/services';
import { NewsProvider } from '@news/core/providers';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('new', reducers),
        StoreModule.forFeature('filters', reducers),
        EffectsModule.forFeature(effects),
    ],
    declarations: [],
    exports: [],
    providers: [
        NewsProvider,
        NewsService,
    ],
})

export class NewsCoreModule {
}
