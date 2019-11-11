import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable()
export class ToastService {

    constructor(private toastController: ToastController) {}

    public async updateUserToast(text: string) {
        const toast = await this.toastController.create({
            message: text,
            duration: 2000,
            showCloseButton: true,
            closeButtonText: 'hide',
            position: 'top',
        });
        toast.present();
    }
}
