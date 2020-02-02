import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { effects } from '@users/core/effects';
import { reducers } from '@users/core/reducers';
import { UsersProvider } from '@users/core/providers';
import { UsersService } from '@users/core/services';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('user', reducers),
        EffectsModule.forFeature(effects),
    ],
    declarations: [],
    exports: [],
    providers: [
        UsersProvider,
        UsersService,
    ],
})
export class UsersCoreModule {
}
