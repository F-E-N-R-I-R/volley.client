import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { UTypes } from '@app/pages/users/core/types/users.types';
import { AuthService } from '@app/pages/auth/core/services/auth.service';

@Component({
    selector: 'app-tabs-settings',
    templateUrl: 'tabs.settings.html',
    styleUrls: ['./tabs.settings.scss'],
})
export class TabsSettingsComponent {
    public user$: Observable<UTypes.IUser> = this.authService.user$;

    constructor(private fb: FormBuilder, public authService: AuthService) {
    }

    settingsForm = this.fb.group({
        main: this.fb.group({
            firstName: [''],
            lastName: [''],
        }),
        additional: this.fb.group({}),
        notifications: this.fb.group({}),
    });

    segmentChanged(ev: any) {
        console.log('Segment changed', ev);
    }
}
