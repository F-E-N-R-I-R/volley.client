import { Component, Input } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {FormGroup, FormBuilder, FormArray} from '@angular/forms';

@Component({
    templateUrl: 'filters.modal.html',
    styleUrls: ['filters.modal.scss'],
})
export class FiltersModalComponent {
    constructor(private navParams: NavParams, private fb: FormBuilder, private modal: ModalController) {
        console.log(navParams.data);
        this.fillCategories(navParams.data.categories);
    }
    public form: FormGroup = this.fb.group({
        categories: this.fb.array([])
    });

    private fillCategories(categories) {
        const categoriesArray = this.form.get('categories') as FormArray;

        while (categoriesArray.length > 0) {
            categoriesArray.removeAt(0);
        }

        Object.keys(categories).forEach(
            name => categoriesArray.push(
                this.fb.group({
                    name: [name],
                    value: [categories[name]]
                })
            )
        );
    }

    public save() {
        this.modal.dismiss();
    }

    public close() {
        this.modal.dismiss();
    }
}
