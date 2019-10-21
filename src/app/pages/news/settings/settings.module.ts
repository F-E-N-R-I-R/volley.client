import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsModalComponent } from '@app/pages/news/settings/settings.modal';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [SettingsModalComponent],
    exports: [],
    providers: [],
    entryComponents: [SettingsModalComponent],
})
export class SettingsModule {
}
