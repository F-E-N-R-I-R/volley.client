import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { EnumValues } from 'enum-values';

import { AuthService } from '@auth/core/services/auth.service';
import { SettingsFormService } from '@settings/core/services/settings-form.service';
import { UTypes } from '@core/types';
import { ImageService } from '@core/services';

@Component({
    selector: 'settings-page',
    templateUrl: 'settings.page.html',
    styleUrls: ['settings.page.scss'],
})
export class SettingsPageComponent {
    public user$: Observable<UTypes.IUser> = this.authService.user$;
    private ngUnsubscribe$ = new Subject();
    public form = this.settingsFormService.form;
    public EnumValues = EnumValues;
    public UTypes = UTypes;

    constructor(private authService: AuthService,
                private settingsFormService: SettingsFormService,
                private router: Router,
                private imageService: ImageService,
    ) {
    }

    public ionViewWillEnter() {

        this.user$
            .pipe(
                takeUntil(this.ngUnsubscribe$),
                filter(user => !!user),
            )
            .subscribe(user => this.settingsFormService.setValue(user));
    }

    public ionViewWillLeave() {
        if (!this.router.url.includes('settings') && this.form.dirty) {
            this.authService.dispatchUpdate(this.settingsFormService.form.value);
            this.form.markAsPristine();
        }
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();
    }

    public logout() {
        this.authService.dispatchLogout();
    }

    public selectImage($event) {
        $event.preventDefault();
        $event.stopPropagation();

        const img = this.imageService.selectImage();

        this.form.controls.avatar.setValue(img);
    }
}
