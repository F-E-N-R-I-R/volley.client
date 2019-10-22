import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { effects } from './effects';
import { reducers } from './reducers';
import { AuthUserProvider } from './providers/auth.user.provider';
import { AuthUserService } from './services/auth.user.service';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('user', reducers),
        EffectsModule.forFeature(effects),
    ],
    declarations: [],
    exports: [],
    providers: [
        AuthUserProvider,
        AuthUserService,
    ],
})
export class AuthCoreModule {
}
