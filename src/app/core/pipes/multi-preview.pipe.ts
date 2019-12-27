import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
    name: 'multiPreview'
})
export class MultiPreviewPipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) {
    }

    transform(items: any[]): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(
            items.length === 1
                ? `<span class="light-text">${items[0].name}</span>`
                : `<ion-badge color="primary">${items.length}</ion-badge>`,
        );
    }
}
