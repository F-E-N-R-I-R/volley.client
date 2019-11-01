import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from '@app/services';


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private authenticationService: AuthenticationService,
    ) {
    }

    canActivate(): boolean {
        return this.authenticationService.isAuthenticated();
    }

}
