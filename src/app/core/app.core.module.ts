import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ErrorsPreviewDirective } from '@core/directives';
import { PhonePipe, DateToAgePipe, MultiPreviewPipe, DateFormatterPipe } from '@core/pipes';
import { ErrorListComponent } from '@core/components';
import { IndicatorsComponent } from '@core/components/indicators/indicators.component';
import { IonicModule } from '@ionic/angular';
import { UserContactCardComponent } from '@core/components/user-contact-card/user-contact-card.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        TranslateModule,
    ],
    declarations: [
        MultiPreviewPipe,
        DateToAgePipe,
        DateFormatterPipe,
        PhonePipe,
        ErrorsPreviewDirective,
        ErrorListComponent,
        IndicatorsComponent,
        UserContactCardComponent,
    ],
    exports: [
        MultiPreviewPipe,
        DateToAgePipe,
        DateFormatterPipe,
        PhonePipe,
        ErrorsPreviewDirective,
        IndicatorsComponent,
        UserContactCardComponent,
    ],
    entryComponents: [
        ErrorListComponent,
        IndicatorsComponent,
        UserContactCardComponent,
    ],
})
export class AppCoreModule {
}
