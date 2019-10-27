import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { effects } from './effects';
import { reducers } from './reducers';
import { SettingsProvider } from './providers/settings.provider';
import { SettingsService } from './services/settings.service';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('settings', reducers),
        EffectsModule.forFeature(effects),
    ],
    declarations: [],
    exports: [],
    providers: [
        SettingsProvider,
        SettingsService,
    ],
})
export class SettingsCoreModule {
}
