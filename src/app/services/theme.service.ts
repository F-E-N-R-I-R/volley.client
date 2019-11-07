import { Injectable, RendererFactory2 } from '@angular/core';
import { EnumValues } from 'enum-values';
import { UTypes } from '@app/pages/users/core/types/users.types';

@Injectable()
export class ThemeService {
    private renderer: any;
    private document: any = window.document;

    constructor(rendererFactory: RendererFactory2) {
        this.renderer = rendererFactory.createRenderer(null, null);
    }

    addBodyClass(bodyClass) {
        this.renderer.addClass(this.document.body, `theme-${bodyClass}`);
    }

    removeBodyClass(bodyClass) {
        this.renderer.removeClass(this.document.body, `theme-${bodyClass}`);
    }

    changeTheme(bodyClass) {
        EnumValues.getValues(UTypes.ETheme).forEach(name => this.removeBodyClass(name));
        this.addBodyClass(bodyClass);
    }
}
