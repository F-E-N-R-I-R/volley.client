import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NewsProvider } from './providers/news.provider';

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
