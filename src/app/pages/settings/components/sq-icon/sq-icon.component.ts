import { Component, Input } from '@angular/core';

@Component({
    selector: 'sq-icon',
    templateUrl: 'sq-icon.component.html',
    styleUrls: ['sq-icon.component.scss'],
})
export class SqIconComponent {
    @Input() color: string;
    @Input() name: string;
}
