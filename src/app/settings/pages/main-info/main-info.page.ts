import { Component, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SettingsFormService } from '@settings/core/services';
import { AuthService } from '@auth/core/services';
import { EnumValues } from 'enum-values';
import { UTypes } from '@core/types';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { map, takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Component({
    templateUrl: 'main-info.page.html',
    styleUrls: ['main-info.page.scss'],
})
export class MainInfoPage implements OnDestroy {
    private ngUnsubscribe$ = new Subject();
    public months$: Observable<string[]> = this.translateService.get('months')
        .pipe(
            takeUntil(this.ngUnsubscribe$),
            map(months => Object.values(months))
        );
    public form = this.settingsFormService.form as FormGroup;
    public genders = EnumValues.getValues(UTypes.EGender);
    public customActionSheetOptions = {
        color: 'vua-secondary',
        translucent: true,
        background: 'red',
    };

    constructor(private authService: AuthService,
                private settingsFormService: SettingsFormService,
                private navController: NavController,
                private translateService: TranslateService) {
    }

    ngOnDestroy(): void {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();
    }

    public save() {
        this.authService.dispatchSilentUpdate(this.settingsFormService.form.value);
        this.form.markAsPristine();
        this.navController.back();
    }
}
