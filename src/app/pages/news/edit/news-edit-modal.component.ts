 import { Component } from '@angular/core';
 import { ModalController, NavParams } from '@ionic/angular';
 import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
    selector: 'news-edit-modal',
    templateUrl: 'news-edit-modal.component.html',
    styleUrls: ['news-edit-modal.component.scss']
})
export class NewsEditModal {
	
	public form: FormGroup = this.fb.group({
		title: [''],
		description: [''],
		id: [null],
		picture: [''],
		category: [''],
		date: [''],
		created_by: [''],
	});

	constructor( private fb: FormBuilder, private modal: ModalController, private navParams: NavParams) {
		if (navParams.data.news) {
			this.form.setValue(navParams.data.news)
		};
	}
}
