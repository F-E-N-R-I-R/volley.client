import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from '@app/pages/auth/core/services/auth.service';
import { Observable, Subject } from 'rxjs';
import { UTypes } from '@app/pages/users/core/types/users.types';
import { SettingsService } from '@app/pages/settings/core/services/settings.service';
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'settings-modal',
    templateUrl: 'settings.modal.html',
    styleUrls: ['settings.modal.scss']
})
export class SettingsModalComponent {
    private ngUnsubscribe$ = new Subject();
    public user$: Observable<UTypes.IUser> = this.authService.user$;
    public settings$: Observable<UTypes.IUser[]> = this.settingsService.settings$;
    public tab = 'main';

    public settingsForm = this.fb.group({
        main: this.fb.group({
            firstName: [''],
            lastName: [''],
        }),
        additional: this.fb.group({}),
        notifications: this.fb.group({}),
    });

    constructor(private modalController: ModalController,
                public authService: AuthService,
                public settingsService: SettingsService,
                private fb: FormBuilder,
    ) {
    }

    public ionViewWillEnter() {
        this.settingsService.dispatchSettings();
    }

    public ionViewWillLeave() {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();

    }

    public success() {
        this.modalController.dismiss({});
    }


    public dismiss() {
        this.modalController.dismiss();
    }

    public logout() {
        this.authService.dispatchLogout();
    }

    segmentChanged(ev: any) {
        console.log('Segment changed', ev);
    }
}
