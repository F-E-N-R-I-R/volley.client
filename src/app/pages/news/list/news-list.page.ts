import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { SettingsModalComponent } from '../settings/settings.modal';
import { NewsProvider } from '../core/providers/news.provider';
import { NTypes } from '../core/types/news.types';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-news',
    templateUrl: 'news-list.page.html',
    styleUrls: ['news-list.page.scss']
})
export class NewsListPage {
    private ngUnsubscribe$ = new Subject();
    public news$: Observable<NTypes.INews[]> = this.newsProvider.getList().pipe(map(({ items }) => items));

    constructor(private modalController: ModalController, private newsProvider: NewsProvider) {
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
