import { NgModule } from '@angular/core';
import { MultiplayPreviewPipe } from '@app/core/pipes/multiplay-preview.pipe';

@NgModule({
    declarations: [MultiplayPreviewPipe],
    exports: [MultiplayPreviewPipe],
})
export class AppCoreModule {
}
