import { Component } from '@angular/core';
import { NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { NativePageTransitions } from '@ionic-native/native-page-transitions/ngx';
import { AuthService } from '@auth/core/services';

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    styleUrls: ['tabs.page.scss']
})
export class TabsComponent {
    private tabIndex = 0;
    private tabs = [
        'activities',
        'events',
        'teams',
        'settings',
    ];

    constructor(private authService: AuthService, private nativePageTransitions: NativePageTransitions) {
    }

    private getAnimationDirection({ tab }: any): string {
        const currentIndex = this.tabIndex;
        this.tabIndex = this.tabs.indexOf(tab);

        switch (true) {
            case tab === 'login':
                return 'up';
            case currentIndex < this.tabIndex:
                return 'left';
            case currentIndex > this.tabIndex:
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
            fixedPixelsBottom: 0,
        };

        this.nativePageTransitions.slide(options);
    }
}
