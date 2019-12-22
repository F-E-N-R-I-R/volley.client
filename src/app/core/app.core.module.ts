import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ErrorsPreviewDirective } from '@core/directives';
import { PhonePipe, DateToAgePipe, MultiPreviewPipe } from '@core/pipes';
import { ErrorListComponent } from '@core/components';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
    ],
    declarations: [
        MultiPreviewPipe,
        DateToAgePipe,
        PhonePipe,
        ErrorsPreviewDirective,
        ErrorListComponent
    ],
    exports: [
        MultiPreviewPipe,
        DateToAgePipe,
        PhonePipe,
        ErrorsPreviewDirective,
    ],
    entryComponents: [
        ErrorListComponent,
    ],
})
export class AppCoreModule {
}
