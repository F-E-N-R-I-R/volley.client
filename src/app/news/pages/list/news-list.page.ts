import { Component } from '@angular/core';
import { from, Observable, Subject } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { NewsProvider } from '@news/core/providers';
import { NTypes } from '@core/types';
import { filter, first, takeUntil } from 'rxjs/operators';
import { FiltersService, NewsService } from '@news/core/services';
import { FiltersModalComponent } from '@news/pages/filters/filters.modal';
import { NewsEditModalComponent } from '@news/pages/edit/news-edit-modal.component';

@Component({
    selector: 'app-news',
    templateUrl: 'news-list.page.html',
    styleUrls: ['news-list.page.scss']
})
export class NewsListPage {
    private ngUnsubscribe$ = new Subject();
    public news$: Observable<NTypes.INews[]> = this.newsService.news$;

    constructor(private modalController: ModalController,
                private newsProvider: NewsProvider,
                private newsService: NewsService,
                private filtersService: FiltersService) {
    }

    public ionViewWillEnter() {
        this.filtersService.filters$
            .pipe(takeUntil(this.ngUnsubscribe$))
            .subscribe(filters => this.newsService.dispatchList(filters));
    }

    public ionViewWillLeave() {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();
    }

    public async showFilters() {
        const modal = await this.modalController.create({
            component: FiltersModalComponent,
        });
        from(modal.onWillDismiss())
            .pipe(
                first(),
                filter(({ data }) => !!data),
            )
            .subscribe(({ data }) => this.filtersService.dispatchUpdateFilters(data));

        return await modal.present();
    }

    doRefresh(event) {
        setTimeout(() => {
            event.target.complete();
        }, 2000);
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
}
