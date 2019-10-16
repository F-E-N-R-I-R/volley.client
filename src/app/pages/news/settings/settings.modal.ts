import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthenticationService } from '../../../services';

@Component({
    templateUrl: 'settings.modal.html',
    styleUrls: ['settings.modal.scss']
})
export class SettingsModalComponent {
    constructor(private modalController: ModalController, public authService: AuthenticationService) {
    }


    public success() {
        this.modalController.dismiss({});
    }


    public dismiss() {
        this.modalController.dismiss();
    }
}
