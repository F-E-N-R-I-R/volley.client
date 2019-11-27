import { NgModule } from '@angular/core';
import { MultiplayPreviewPipe } from '@app/core/pipes/multiplay-preview.pipe';
import { DateToAgePipe } from '@app/core/pipes/date-to-age.pipe';

@NgModule({
    declarations: [MultiplayPreviewPipe, DateToAgePipe],
    exports: [MultiplayPreviewPipe, DateToAgePipe],
})
export class AppCoreModule {
}
