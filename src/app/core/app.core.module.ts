import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ErrorsPreviewDirective } from '@core/directives';
import { PhonePipe, DateToAgePipe, MultiPreviewPipe, DateFormatterPipe } from '@core/pipes';
import { ErrorListComponent, ItemActionsComponent } from '@core/components';
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
        ItemActionsComponent,
    ],
    exports: [
        MultiPreviewPipe,
        DateToAgePipe,
        DateFormatterPipe,
        PhonePipe,
        ErrorsPreviewDirective,
        IndicatorsComponent,
        UserContactCardComponent,
        ItemActionsComponent,
    ],
    entryComponents: [
        ErrorListComponent,
        IndicatorsComponent,
        UserContactCardComponent,
        ItemActionsComponent,
    ],
})
export class AppCoreModule {
}
