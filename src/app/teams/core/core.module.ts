import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TeamsProvider } from '@teams/core/providers';


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
