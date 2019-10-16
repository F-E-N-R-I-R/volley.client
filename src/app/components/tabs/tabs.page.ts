import { Component } from '@angular/core';
import { AuthenticationService } from '@app/services';

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    styleUrls: ['tabs.page.scss']
})
export class TabsComponent {
    constructor(private authService: AuthenticationService) {
    }
}
