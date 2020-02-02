import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { UTypes } from '@core/types';
import { AuthService } from '@auth/core/services';
import { ThemeService } from '@core/services';


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

            // TODO REFACTOR
            this.user$.subscribe(user => {
                this.themeService.changeTheme(user.theme || UTypes.ETheme.WHITE);
                this.translateService.use(user.language || UTypes.ELanguage.ENGLISH);
            });
        });
    }
}
