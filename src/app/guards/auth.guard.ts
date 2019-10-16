import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from '@app/services';
import { Observable } from 'rxjs';


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private authenticationService: AuthenticationService,
    ) {
    }

    canActivate(): Observable<boolean> {
        return this.authenticationService.authState;
    }

}
