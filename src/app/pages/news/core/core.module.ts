import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NewsProvider } from '@news/core/providers';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [],
    exports: [],
    providers: [
        NewsProvider,
    ],
})
export class NewsCoreModule {
}
