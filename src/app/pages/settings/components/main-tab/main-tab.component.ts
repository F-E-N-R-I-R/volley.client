import { Component } from "@angular/core";
import { FormGroup, FormGroupDirective} from "@angular/forms";

@Component({
    selector: 'app-main-tab',
    templateUrl: 'main-tab.component.html',
    styleUrls: ['main-tab.component.scss']
})
export class MainTabComponent {
    public form: FormGroup = this.parentGroup.form.get('main') as FormGroup;
    constructor(public parentGroup: FormGroupDirective){
    }
}
