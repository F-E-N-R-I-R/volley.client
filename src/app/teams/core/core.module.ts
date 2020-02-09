import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TeamsProvider } from '@teams/core/providers';
import { StoreModule } from '@ngrx/store';
import { reducers } from '@teams/core/reducers';
import { EffectsModule } from '@ngrx/effects';
import { effects } from '@teams/core/effects';
import { TeamsService } from '@teams/core/services';


@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('teamsList', reducers),
        StoreModule.forFeature('teamsFilters', reducers),
        EffectsModule.forFeature(effects),
    ],
    declarations: [],
    exports: [],
    providers: [
        TeamsProvider,
        TeamsService,
    ],
})
export class TeamsCoreModule {
}
