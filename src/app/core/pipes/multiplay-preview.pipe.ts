import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
    name: 'multiplayPreview'
})
export class MultiplayPreviewPipe implements PipeTransform {
    constructor(private santinizer: DomSanitizer) {
    }

    transform(items: any[]): SafeHtml {
        return items.length === 1
            ? items[0].name
            : this.santinizer.bypassSecurityTrustHtml(
                `<ion-badge color="primary">${items.length}</ion-badge>`,
            );
    }
}
