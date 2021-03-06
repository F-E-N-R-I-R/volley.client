import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
    name: 'phone'
})
export class PhonePipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) {
    }

    transform(phone: number, collable?: boolean): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(
            collable ?
                `<a class="link" href="tel:+380${String(phone)}">
                    ${String(phone).replace(/(\d{2})(\d{3})(\d{4})/, '+380 $1 $2 $3')}
                 </a>`
                : `<span>${String(phone).replace(/(\d{2})(\d{3})(\d{4})/, '+380 $1 $2 $3')}</span>`,
        );
    }
}
