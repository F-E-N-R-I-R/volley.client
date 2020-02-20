import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'dateFormatter'
})
export class DateFormatterPipe implements PipeTransform {
    private dateArr: string[];

    transform(dates: any[], type?: string, format?: string, maxLengthVal?: number): string {
        this.dateArr = dates.map(date => moment(date).format(format));
        console.log(this.dateArr);
        this.dateArr = this.dateArr.filter(date => moment(date).isValid());
        console.log(this.dateArr);
        return `<p>hallo</p>`;
    }
}
