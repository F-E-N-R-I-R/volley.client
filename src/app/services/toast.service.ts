import { Injectable, OnDestroy } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable()
export class ToastService {
    private ngUnsubscribe$ = new Subject();

    constructor(private toastController: ToastController, private translateService: TranslateService) {
    }

    public show(key: string) {
        this.translateService.get(key).pipe(takeUntil(this.ngUnsubscribe$)).subscribe((msg: string) => {
            this.toast(msg);
        });
    }

    private async toast(text: string) {
        const toast = await this.toastController.create({
            message: text,
            duration: 1500,
            position: 'top',
        });
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();
        toast.present();
    }
}
