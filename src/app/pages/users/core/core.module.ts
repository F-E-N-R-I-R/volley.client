import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { effects } from './effects';
import { reducers } from './reducers';
import { UsersProvider } from './providers/users.provider';
import { UsersService } from './services/users.service';

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
