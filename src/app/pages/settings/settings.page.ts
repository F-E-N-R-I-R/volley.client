import { Component } from '@angular/core';
import { AuthService } from '@app/pages/auth/core/services/auth.service';
import { Observable, Subject } from 'rxjs';
import { SettingsFormService } from '@app/pages/settings/core/services/settings-form.service';
import { UTypes } from '@app/pages/users/core/types/users.types';
import { filter, takeUntil } from 'rxjs/operators';
import { EnumValues } from 'enum-values';
import { Router } from '@angular/router';

@Component({
    selector: 'settings-page',
    templateUrl: 'settings.page.html',
    styleUrls: ['settings.page.scss']
})
export class SettingsPageComponent {
    public user$: Observable<UTypes.IUser> = this.authService.user$;
    private ngUnsubscribe$ = new Subject();
    public form = this.settingsFormService.form;
    public tab = 'main';
    public EnumValues = EnumValues;
    public UTypes = UTypes;

    constructor(private authService: AuthService, private settingsFormService: SettingsFormService, private router: Router) {
    }

    public ionViewWillEnter() {

        this.user$
            .pipe(
                takeUntil(this.ngUnsubscribe$),
                filter(user => !!user),
            )
            .subscribe(user => this.settingsFormService.form.setValue(user));
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
}
