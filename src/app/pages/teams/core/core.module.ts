import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TeamsProvider } from './providers/teams.provider';


@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [],
    exports: [],
    providers: [
        TeamsProvider,
    ],
})
export class TeamsCoreModule {
}
