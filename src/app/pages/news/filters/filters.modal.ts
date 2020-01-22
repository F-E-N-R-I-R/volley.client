import { Component } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {FormGroup, FormBuilder, FormArray} from '@angular/forms';
import {EnumValues} from 'enum-values';
import { NTypes } from '@core/types';

@Component({
    templateUrl: 'filters.modal.html',
    styleUrls: ['filters.modal.scss'],
})
export class FiltersModalComponent {
    public filters = EnumValues.getValues(NTypes.ECategory);

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
}
