import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
    name: 'phone'
})
export class PhonePipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) {
    }

    transform(phone: number): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(
            (String(phone).length === 9) ?
                `<span>${String(phone).replace(/(\d{2})(\d{3})(\d{4})/, '+380 $1 $2 $3')}</span>` :
                `<span>${String(phone)}</span>`,
        );
    }
}
