import { Component, Input } from '@angular/core';
import { ETypes } from '@core/types';

@Component({
    selector: 'app-events-list-item',
    templateUrl: 'events-list-item.component.html',
    styleUrls: ['events-list-item.component.scss'],
})
export class EventsListItemComponent {
    @Input() item: ETypes.IEvent;

    constructor() {
    }
}
