import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'dateFormatter'
})
export class DateFormatterPipe implements PipeTransform {
    private datesFormatted: any[];

    transform(dates: any[], type?: string, format = 'DD-MM-YYYY', max?: number, separator?: string): string {
        this.datesFormatted = dates.reduce((acc, item) => {
            const date = moment(item);

            if (date.isValid() && (acc.length < max || !max)) {
                acc.push(date.format(format));
            }

            return acc;
        }, []);

        if (!this.datesFormatted.length) {
            return '';
        }

        switch (type) {
            case 'range':
                return (this.datesFormatted[0] + ' - ' + this.datesFormatted[this.datesFormatted.length - 1]);
            case 'multiple':
                return this.datesFormatted.join(separator);
            case 'single':
            default:
                return this.datesFormatted[0];
        }
    }
}
