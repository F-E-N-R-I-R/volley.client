import { Component, Input } from '@angular/core';
import { NTypes } from '@core/types';
import { ModalController } from '@ionic/angular';
import { NewsEditModalComponent } from '@news/pages/edit/news-edit-modal.component';

@Component({
    selector: 'app-news-list-item',
    templateUrl: 'news-list-item.component.html',
    styleUrls: ['news-list-item.component.scss'],
})
export class NewsListItemComponent {
    @Input() item: NTypes.INews;
    @Input() description: NTypes.INews;

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
        const { data } = await modal.onWillDismiss();
        console.log(data);
    }
}
