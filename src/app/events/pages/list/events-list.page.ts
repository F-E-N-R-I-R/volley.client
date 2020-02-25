import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ETypes } from '@core/types';
import { EventsService } from '@events/core/services';
import { ModalController } from '@ionic/angular';
import { EventsEditModalComponent } from '@events/pages/events-edit/events-edit-modal.component';

@Component({
    selector: 'app-events',
    templateUrl: 'events-list.page.html',
    styleUrls: ['events-list.page.scss']
})
export class EventsListPage implements OnInit, OnDestroy {
    private ngUnsubscribe$ = new Subject();
    public events$: Observable<ETypes.IEvent[]> = this.eventsService.list$;

    constructor(private eventsService: EventsService, private modalController: ModalController) {
    }


    public ngOnInit() {
        this.eventsService.dispatchGetList({});
    }


    public ngOnDestroy() {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();

    }

    doRefresh(event) {
        setTimeout(() => {
            event.target.complete();
        }, 2000);
    }

    async presentModal(news = null) {
        const modal = await this.modalController.create({
            component: EventsEditModalComponent,
            componentProps: {
                news
            }
        });
        await modal.present();
        const { data } = await modal.onWillDismiss();
    }

}
