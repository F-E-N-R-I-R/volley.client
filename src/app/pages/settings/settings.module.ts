import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsModalComponent } from '@app/pages/settings/settings.modal';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
        TranslateModule,
    ],
    declarations: [SettingsModalComponent],
    exports: [],
    providers: [],
    entryComponents: [SettingsModalComponent],
})
export class SettingsModule {
}
