import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from '@auth/core/services';
import { Observable } from 'rxjs';
import { UTypes } from '@core/types';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    public readonly user$: Observable<UTypes.IUser> = this.authService.user$;

    constructor(private router: Router, private authService: AuthService) {
    }

    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
        return this.user$.pipe(map(user => {
                if (!user) {
                    this.router.navigate(['login']);
                }

                return !!user;
            })
        );
    }
}
