import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { NewsProvider } from '@news/core/providers';
import { NTypes } from '@core/types';
import { map } from 'rxjs/operators';
import { NewsService } from '@news/core/services';
import { FiltersModalComponent } from '@news/filters/filters.modal';

@Component({
    selector: 'app-news',
    templateUrl: 'news-list.page.html',
    styleUrls: ['news-list.page.scss']
})
export class NewsListPage {
    private filters: any = {
        categories: {
            fivb: true,
            fvu: true,
            fvho: true,
            teams: true,
            places: true,
            events: true,
        },
    };
    private ngUnsubscribe$ = new Subject();
    // public news$: Observable<NTypes.INews[]> = this.newsProvider.getList().pipe(map(({ items }) => items));
    public news$: Observable<NTypes.INews[]> = this.newsService.news$;

    constructor(private modalController: ModalController, private newsProvider: NewsProvider, private newsService: NewsService) {
    }

    public ionViewWillEnter() {
        this.newsService.dispatchList();
    }

    public ionViewWillLeave() {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();
    }

    public async showFilters() {
        const modal = await this.modalController.create({
            component: FiltersModalComponent,
            componentProps: this.filters,
        });
        return await modal.present();
    }
}
