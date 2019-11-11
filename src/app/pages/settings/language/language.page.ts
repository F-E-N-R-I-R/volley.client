import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SettingsFormService } from '@app/pages/settings/core/services/settings-form.service';
import { AuthService } from '@app/pages/auth/core/services/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    templateUrl: 'language.page.html',
    styleUrls: ['language.page.scss'],
})
export class LanguagePage {
    public form = this.settingsFormService.form as FormGroup;
    private ngUnsubscribe$ = new Subject();

    constructor(private authService: AuthService,
                private settingsFormService: SettingsFormService,
                private translateService: TranslateService,
    ) {
    }

    ionViewWillEnter() {
        this.form.get('language').valueChanges
            .pipe(takeUntil(this.ngUnsubscribe$))
            .subscribe(value => this.translateService.use(value));
    }

    ionViewWillLeave() {
        this.authService.dispatchSilentUpdate(this.settingsFormService.form.value);
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();
    }
}
