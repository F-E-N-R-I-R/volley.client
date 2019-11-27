import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'dateToAge'})
export class DateToAgePipe implements PipeTransform {
    transform(value: Date): number {
        return Math.floor((+new Date() - +new Date(value)) / 31536000000);
    }
}
