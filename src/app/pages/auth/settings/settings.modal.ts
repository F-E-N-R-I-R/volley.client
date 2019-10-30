import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from '@app/pages/auth/core/services/auth.service';
import { Observable, Subject } from 'rxjs';
import { SettingsFormService } from '@app/pages/auth/core/services/settings-form.service';
import { FormBuilder } from '@angular/forms';
import { UTypes } from '@app/pages/users/core/types/users.types';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'settings-modal',
    templateUrl: 'settings.modal.html',
    styleUrls: ['settings.modal.scss']
})
export class SettingsModalComponent {
    public user$: Observable<UTypes.IUser> = this.authService.user$;
    private ngUnsubscribe$ = new Subject();
    public settingsForm = this.settingsFormService.form;
    public tab = 'main';

    constructor(private modalController: ModalController,
                public authService: AuthService,
                private fb: FormBuilder,
                private settingsFormService: SettingsFormService,
    ) {
    }

    public ionViewWillEnter() {
        this.user$
            .pipe(takeUntil(this.ngUnsubscribe$))
            .subscribe(user => this.settingsFormService.form.setValue(user));
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

    public save() {
        this.authService.dispatchUpdate(this.settingsFormService.form.value);
    }
}
