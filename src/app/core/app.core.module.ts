import { NgModule } from '@angular/core';
import { MultiPreviewPipe } from '@app/core/pipes/multi-preview.pipe';
import { DateToAgePipe } from '@app/core/pipes/date-to-age.pipe';
import { InvalidMessagesDirective } from '@app/core/directives/invalid-message.directive';
import { PhonePipe } from '@app/core/pipes/phone.pipe';

@NgModule({
    declarations: [
        MultiPreviewPipe,
        DateToAgePipe,
        PhonePipe,
        InvalidMessagesDirective,
    ],
    exports: [
        MultiPreviewPipe,
        DateToAgePipe,
        PhonePipe,
        InvalidMessagesDirective,
    ],
})
export class AppCoreModule {
}
