import { Component } from '@angular/core';
import { AuthService } from '@app/pages/auth/core/services/auth.service';
import { Observable, Subject } from 'rxjs';
import { SettingsFormService } from '@app/pages/auth/core/services/settings-form.service';
import { UTypes } from '@app/pages/users/core/types/users.types';
import { filter, takeUntil } from 'rxjs/operators';

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

    constructor(private authService: AuthService, private settingsFormService: SettingsFormService) {
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
        // this.authService.dispatchUpdate(this.settingsFormService.form.value);
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();

    }

    public logout() {
        this.authService.dispatchLogout();
    }
}
