import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { TTypes } from '@core/types';
import { TeamsService } from '@teams/core/services';
import { TeamsEditModalComponent } from '@teams/pages/teams-edit/teams-edit-modal.component';
import { ModalController } from '@ionic/angular';


@Component({
    selector: 'app-teams',
    templateUrl: 'teams-list.page.html',
    styleUrls: ['teams-list.page.scss']
})
export class TeamsListPage implements OnInit, OnDestroy {
    private ngUnsubscribe$ = new Subject();
    public teams$: Observable<TTypes.ITeam[]> = this.teamsService.teams$;

    constructor(private teamsService: TeamsService,
                private modalController: ModalController) {
    }

    public ngOnInit() {
        this.teamsService.dispatchGetList({});
    }


    public ngOnDestroy() {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();

    }
    doRefresh(event) {
        console.log('Begin async operation');

        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);

    }
    async presentModal(news = null) {
        const modal = await this.modalController.create({
            component: TeamsEditModalComponent,
            componentProps: {
                news
            }
        });
        await modal.present();
        const { data } = await modal.onWillDismiss();
    }
}
