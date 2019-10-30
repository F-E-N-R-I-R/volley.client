import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from '@app/pages/auth/core/services/auth.service';
import { Subject } from 'rxjs';
import { SettingsService } from '@app/pages/settings/core/services/settings.service';
import { SettingsFormService } from '@app/pages/settings/core/services/settings-form.service';
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'settings-modal',
    templateUrl: 'settings.modal.html',
    styleUrls: ['settings.modal.scss']
})
export class SettingsModalComponent {
    private ngUnsubscribe$ = new Subject();
    public settingsForm = this.settingsFormService.form;
    public tab = 'main';

    constructor(private modalController: ModalController,
                public authService: AuthService,
                public settingsService: SettingsService,
                private fb: FormBuilder,
                private settingsFormService: SettingsFormService,
    ) {
    }

    public ionViewWillEnter() {
        // this.settingsService.dispatchSettings();
    }

    public ionViewWillLeave() {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();

    }

    public success() {
        this.modalController.dismiss({});
    }


    public dismiss() {
        this.modalController.dismiss();
    }

    public logout() {
        this.authService.dispatchLogout();
    }

    public save() {
        this.settingsService.dispatchSettings(this.settingsFormService.form.value);
    }
}
