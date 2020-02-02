import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { effects } from '@auth/core/effects';
import { reducers } from '@auth/core/reducers';
import { AuthProvider } from '@auth/core/providers';
import { AuthService } from '@auth/core/services';

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
