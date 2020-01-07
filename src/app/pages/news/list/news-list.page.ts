import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { NewsProvider } from '@news/core/providers';
import { NTypes, } from '@core/types';
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
     public delete() {
          console.log('Y menya ne poly4ilos')
    }
    doRefresh(event) {
    console.log('Begin async operation');
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
}
}
