import { Component } from "@angular/core";
import { FormGroup, FormGroupDirective} from "@angular/forms";

@Component({
    selector: 'app-additional-info',
    templateUrl: 'additional-info-tab.component.html',
    styleUrls: ['additional-info-tab.component.scss']
})
export class AdditionalInfoTabComponent {
    public form: FormGroup = this.parentGroup.form.get('additional') as FormGroup;
    constructor(public parentGroup: FormGroupDirective){
    }
}
