import { Component, Input } from '@angular/core';
import { NTypes } from '@core/types';

@Component({
    selector: 'app-news-list-item',
    templateUrl: 'news-list-item.component.html',
    styleUrls: ['news-list-item.component.scss'],
})
export class NewsListItemComponent {
	@Input() item: NTypes.INews;
	@Input() description: NTypes.INews;
}
