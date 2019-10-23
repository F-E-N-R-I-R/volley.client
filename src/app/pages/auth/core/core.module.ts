import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { effects } from './effects';
import { reducers } from './reducers';
import { AuthProvider } from './providers/auth.provider';
import { AuthService } from './services/auth.service';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('auth', reducers),
        EffectsModule.forFeature(effects),
    ],
    declarations: [],
    exports: [],
    providers: [
        AuthProvider,
        AuthService,
    ],
})
export class AuthCoreModule {
}
