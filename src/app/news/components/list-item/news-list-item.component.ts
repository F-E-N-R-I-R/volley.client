import { Component, Input } from '@angular/core';
import { NTypes } from '@core/types';
import { ModalController } from '@ionic/angular';
import { NewsEditModalComponent } from '@news/pages/edit/news-edit-modal.component';
import { NewsService } from '@news/core/services';

@Component({
    selector: 'app-news-list-item',
    templateUrl: 'news-list-item.component.html',
    styleUrls: ['news-list-item.component.scss'],
})
export class NewsListItemComponent {
    @Input() item: NTypes.INews;
    @Input() description: NTypes.INews;

    constructor(private modalController: ModalController, private newsService: NewsService) {
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
    }

    public delete(i) {
        this.newsService.dispatchDeleteItem(i);
    }
}
