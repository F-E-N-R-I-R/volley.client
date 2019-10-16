import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from '@app/services';
import { Router } from '@angular/router';
import { filter, map, pairwise } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private authenticationService: AuthenticationService,
        private router: Router,
        private translate: TranslateService,
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
            this.splashScreen.hide();

            this.authenticationService.authState.pipe(
                pairwise(),
                filter(([old, newState]) => old !== newState),
                map(([old, newState]) => newState),
            ).subscribe(state => {
                // TODO REFACTOR
                if (state) {
                    this.router.navigate(['/news']);
                } else {
                    this.router.navigate(['/login']);
                    setTimeout(() => {
                        window.location.reload();
                    }, 100);
                }
            });
        });
    }
}
