import { NgModule } from '@angular/core';
import { MultiPreviewPipe } from '@app/core/pipes/multi-preview.pipe';
import { DateToAgePipe } from '@app/core/pipes/date-to-age.pipe';
import { ErrorsPreviewDirective } from '@app/core/directives/errors-view.directive';
import { PhonePipe } from '@app/core/pipes/phone.pipe';
import { ErrorListComponent } from '@app/core/components/error-list/error-list.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

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
