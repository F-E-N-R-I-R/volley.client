import { Component, Input } from '@angular/core';
import { TTypes } from '@core/types';
import { split } from 'ts-node';


@Component({
    selector: 'app-indicators',
    templateUrl: 'indicators.component.html',
    styleUrls: ['indicators.component.scss'],
})
export class IndicatorsComponent {
    @Input() indicators: any[] = [];
    @Input() inline = true;
    @Input() description = false;
    @Input() value = true;
    @Input() max = null;
}

