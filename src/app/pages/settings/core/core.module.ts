import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { effects } from './effects';
import { reducers } from './reducers';
import { SettingsProvider } from './providers/settings.provider';
import { SettingsService } from './services/settings.service';
import { SettingsFormService } from './services/settings-form.service';

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
        SettingsFormService,
    ],
})
export class SettingsCoreModule {
}
