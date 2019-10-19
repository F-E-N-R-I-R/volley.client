import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CompetitionsProvider } from './providers/competitions.provider';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [],
    exports: [],
    providers: [
        CompetitionsProvider,
    ],
})
export class CompetitionsCoreModule {
}
