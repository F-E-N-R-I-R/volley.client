import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SettingsFormService } from '@settings/core/services';
import { AuthService } from '@auth/core/services';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    templateUrl: 'notifications.page.html',
    styleUrls: ['notifications.page.scss'],
})
export class NotificationsPage implements OnInit, OnDestroy {
    private ngUnsubscribe$ = new Subject();
    public form = this.settingsFormService.form.get('notifications') as FormGroup;
    public allToggleControl: FormControl = new FormControl(false);

    constructor(private authService: AuthService, private settingsFormService: SettingsFormService) {
    }

    ngOnInit(): void {
        this.form.valueChanges
            .pipe(
                takeUntil(this.ngUnsubscribe$),
            )
            .subscribe((value) => {
                this.allToggleControl.setValue(
                    Object.values(value).every(Boolean),
                    { emitEvent: false }
                );
            });


        this.allToggleControl.valueChanges
            .pipe(
                takeUntil(this.ngUnsubscribe$),
            )
            .subscribe((value) => {
                const notificationGroup = this.form as FormGroup;

                Object.keys(notificationGroup.controls).forEach(controlName => {
                    notificationGroup.controls[controlName].setValue(value);
                });
            });
    }

    ngOnDestroy() {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();
    }

    public ionViewWillLeave() {
        this.authService.dispatchSilentUpdate(this.settingsFormService.form.value);
    }
}
