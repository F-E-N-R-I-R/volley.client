import { Component } from '@angular/core';


@Component({
    selector: 'app-image-over',
    templateUrl: 'image-over.component.html',
    styleUrls: ['image-over.component.scss'],
})
export class ImageOverComponent {
    public loaded = true;

    public ionImgDidLoad() {
        this.loaded = true;
    }

    public ionImgWillLoad() {
        this.loaded = false;
    }
}

