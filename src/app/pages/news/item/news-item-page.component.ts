import {Component} from '@angular/core';
import {NewsEditModalComponent} from '@news/edit/news-edit-modal.component';
import {ModalController} from '@ionic/angular';


@Component({
    templateUrl: 'news-item-page.component.html',
    styleUrls: ['news-item-page.component.scss'],
})
export class NewsItemPageComponent {
    constructor(private modalController: ModalController) {

    }

    async presentModal(news = null) {
        const modal = await this.modalController.create({
            component: NewsEditModalComponent,
            componentProps: {
                news
            }
        });
        await modal.present();
        const {data} = await modal.onWillDismiss();
        console.log(data);
    }
}
