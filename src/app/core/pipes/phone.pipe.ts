import { Pipe, PipeTransform } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

@Pipe({
    name: 'phone'
})
export class PhonePipe implements PipeTransform {

    transform(phone: number, collable?: boolean): SafeHtml {
            return `<a href="tel:+380501234567">
                        ${String(phone).replace(/(\d{2})(\d{3})(\d{4})/, '+380 $1 $2 $3')}
                    </a>`;
    }
}
