import { NgModule } from '@angular/core';
import { MultiPreviewPipe } from '@app/core/pipes/multi-preview.pipe';
import { DateToAgePipe } from '@app/core/pipes/date-to-age.pipe';

@NgModule({
    declarations: [MultiPreviewPipe, DateToAgePipe],
    exports: [MultiPreviewPipe, DateToAgePipe],
})
export class AppCoreModule {
}
