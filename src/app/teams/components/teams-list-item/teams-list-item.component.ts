import { Component, Input } from '@angular/core';
import { TTypes } from '@core/types';


@Component({
    selector: 'app-teams-list-item',
    templateUrl: 'teams-list-item.component.html',
    styleUrls: ['teams-list-item.component.scss'],
})
export class TeamsListItemComponent {
    @Input() item: TTypes.ITeam;

}
