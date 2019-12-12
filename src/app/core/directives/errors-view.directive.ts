import {
    ComponentFactoryResolver,
    Directive,
    ElementRef,
    OnInit,
    Renderer2,
    Self,
    ViewContainerRef
} from '@angular/core';
import { ErrorListComponent } from '@app/core/components/error-list/error-list.component';
import { NgControl } from '@angular/forms';


@Directive({
    selector: '[appErrorsPreview]'
})
export class ErrorsPreviewDirective implements OnInit {
    constructor(private renderer: Renderer2,
                private elmRef: ElementRef,
                private componentFactoryResolver: ComponentFactoryResolver,
                private viewContainerRef: ViewContainerRef,
                @Self() private ngControl: NgControl) {
    }

    ngOnInit(): void {
        const compFactory = this.componentFactoryResolver.resolveComponentFactory(ErrorListComponent);
        const compRef = this.viewContainerRef.createComponent(compFactory);
        compRef.instance.control = this.ngControl;

        this.renderer.appendChild(this.renderer.parentNode(this.elmRef.nativeElement), compRef.location.nativeElement);
    }
}

