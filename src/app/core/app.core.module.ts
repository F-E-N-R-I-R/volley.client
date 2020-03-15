import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ErrorsPreviewDirective } from '@core/directives';
import { PhonePipe, DateToAgePipe, MultiPreviewPipe, DateFormatterPipe } from '@core/pipes';
import {
    ActionAvatarComponent,
    ErrorListComponent,
    ImageOverComponent,
    ItemActionsComponent,
    IndicatorsComponent,
    UserContactCardComponent
} from '@core/components';
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
        DateFormatterPipe,
        PhonePipe,
        ErrorsPreviewDirective,
        ErrorListComponent,
        IndicatorsComponent,
        UserContactCardComponent,
        ItemActionsComponent,
        ActionAvatarComponent,
        ImageOverComponent,
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
        ActionAvatarComponent,
        ImageOverComponent,
    ],
    entryComponents: [
        ErrorListComponent,
        IndicatorsComponent,
        UserContactCardComponent,
        ItemActionsComponent,
        ActionAvatarComponent,
        ImageOverComponent,
    ],
})
export class AppCoreModule {
}
