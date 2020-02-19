import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ErrorsPreviewDirective } from '@core/directives';
import { PhonePipe, DateToAgePipe, MultiPreviewPipe } from '@core/pipes';
import { ErrorListComponent } from '@core/components';
import { IndicatorsComponent } from '@core/components/indicators/indicators.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        TranslateModule,
    ],
    declarations: [
        MultiPreviewPipe,
        DateToAgePipe,
        PhonePipe,
        ErrorsPreviewDirective,
        ErrorListComponent,
        IndicatorsComponent,
    ],
    exports: [
        MultiPreviewPipe,
        DateToAgePipe,
        PhonePipe,
        ErrorsPreviewDirective,
        IndicatorsComponent,
    ],
    entryComponents: [
        ErrorListComponent,
        IndicatorsComponent,
    ],
})
export class AppCoreModule {
}
