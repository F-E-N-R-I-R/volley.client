import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from '@app/pages/auth/core/services/auth.service';
import { Observable } from 'rxjs';
import { UTypes } from '@app/pages/users/core/types/users.types';
import { SettingsService } from '@app/pages/settings/core/services/settings.service';

@Component({
    selector: 'settings-modal',
    templateUrl: 'settings.modal.html',
    styleUrls: ['settings.modal.scss']
})
export class SettingsModalComponent {
    public user$: Observable<UTypes.IUser> = this.authService.user$;
    public settings$: Observable<UTypes.IUser[]> = this.settingsService.settings$;

    constructor(private modalController: ModalController, public authService: AuthService, public settingsService: SettingsService) {
    }


    public success() {
        this.modalController.dismiss({});
    }


    public dismiss() {
        this.modalController.dismiss();
    }

    public login() {
        this.settingsService.dispatchSettings();
    }

    public logout() {
        this.authService.dispatchLogout();
    }
}
