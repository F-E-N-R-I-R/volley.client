import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { SettingsModalComponent } from '../settings/settings.modal';

@Component({
    selector: 'app-news',
    templateUrl: 'news-list.page.html',
    styleUrls: ['news-list.page.scss']
})
export class NewsListPage {
    private ngUnsubscribe$ = new Subject();

    constructor(private modalController: ModalController) {
    }


    public ionViewWillEnter() {
    }


    public ionViewWillLeave() {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();

    }

    public async showSettings() {
        const modal = await this.modalController.create({ component: SettingsModalComponent });

        return await modal.present();
    }

}
