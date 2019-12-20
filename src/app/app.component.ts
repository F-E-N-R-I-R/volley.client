import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService, ThemeService } from '@app/services';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { UTypes } from '@app/pages/users/core/types/users.types';
import { AuthService } from '@app/pages/auth/core/services/auth.service';
import { filter } from 'rxjs/operators';


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    public user$: Observable<UTypes.IUser> = this.authService.user$.pipe(filter(Boolean));
    private sb: any = (window as any).StatusBar;
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private authenticationService: AuthenticationService,
        private router: Router,
        private translate: TranslateService,
        private authService: AuthService,
        private themeService: ThemeService,
        private translateService: TranslateService,
    ) {
        this.initializeApp();

        translate.addLangs(['en', 'fr']);
        translate.setDefaultLang('en');

        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.statusBar.backgroundColorByHexString('#f7f7f7');
            this.splashScreen.hide();

            if (this.sb) {
                this.sb.backgroundColorByHexString('#f7f7f7');
                this.sb.styleDefault();
            }

            this.authenticationService.authState.subscribe(state => {
                // TODO REFACTOR
                if (state) {
                    this.router.navigate(['news']);
                } else {
                    this.router.navigate(['login']);
                }
            });

            this.user$.subscribe(user => {
                this.themeService.changeTheme(user.theme || UTypes.ETheme.WHITE);
                this.translateService.use(user.language || UTypes.ELanguage.ENGLISH);
            });
        });
    }
}
