import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from '@app/pages/auth/core/services/auth.service';
import { Observable } from 'rxjs';
import { UTypes } from '@app/pages/users/core/types/users.types';

@Component({
    selector: 'settings-modal',
    templateUrl: 'settings.modal.html',
    styleUrls: ['settings.modal.scss']
})
export class SettingsModalComponent {
    public user$: Observable<UTypes.IUser> = this.authService.user$;

    constructor(private modalController: ModalController, public authService: AuthService) {
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
}
