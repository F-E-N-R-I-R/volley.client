import { Component, Input } from '@angular/core';
import { TeamsEditModalComponent } from '@teams/pages/teams-edit/teams-edit-modal.component';
import { ModalController } from '@ionic/angular';

@Component({
    templateUrl: 'teams-item.page.html',
    styleUrls: ['teams-item.page.scss'],
})
export class TeamsItemPage {
    constructor(private modalController: ModalController) {

    }

    async presentModal(teams = null) {
        const modal = await this.modalController.create({
            component: TeamsEditModalComponent,
            componentProps: {
                teams
            }
        });
        await modal.present();
        const {data} = await modal.onWillDismiss();
    }
}
