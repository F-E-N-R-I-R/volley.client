import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { MainInfoPage } from '@app/pages/settings/main-info/main-info.page';

@Injectable()
export class DataChangesGuard implements CanDeactivate<MainInfoPage> {
    constructor() {
    }

    canDeactivate(
        component: MainInfoPage,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState: RouterStateSnapshot
    ) {
        if (component.form.invalid) {
            return false;
        } else if (component.form.dirty) {
            return window.confirm('Unsaved data detected. Want to exit?');
        } else {
            return true;
        }
    }
}
