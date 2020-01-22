import { Component } from '@angular/core';
import { AuthenticationService } from '@core/services';
import { NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { NativePageTransitions } from '@ionic-native/native-page-transitions/ngx';

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    styleUrls: ['tabs.page.scss']
})
export class TabsComponent {
    loaded = false;
    tabIndex = 0;

    constructor(private authService: AuthenticationService, private nativePageTransitions: NativePageTransitions) {
    }

    private getAnimationDirection(e: any): string {
        const currentIndex = this.tabIndex;

        this.tabIndex = e.index;
        switch (true) {
            case currentIndex < e.index:
                return 'left';
            case currentIndex > e.index:
                return 'right';
        }
    }

    transition(e: any): void {
        const options: NativeTransitionOptions = {
            direction: this.getAnimationDirection(e),
            duration: 250,
            slowdownfactor: -1,
            slidePixels: 0,
            iosdelay: 20,
            androiddelay: 0,
            fixedPixelsTop: 0,
            fixedPixelsBottom: 48,
        };

        if (!this.loaded) {
            this.loaded = true;
            return;
        }

        this.nativePageTransitions.slide(options);
    }
}
