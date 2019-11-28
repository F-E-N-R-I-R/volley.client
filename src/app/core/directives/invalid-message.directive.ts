import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appInvalidMessages]'
})
export class InvalidMessagesDirective implements OnInit {

    constructor(private el: ElementRef) {}

    ngOnInit() {
        this.el.nativeElement.textContent += '+++++++++';
    }
}
