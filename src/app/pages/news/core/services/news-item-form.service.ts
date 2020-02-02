import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { NTypes } from '@core/types';

@Injectable()
export class NewsFormService {
    public form = this.fb.group( {
        title: ['', [Validators.required, Validators.maxLength(32)]],
        picture: ['', [Validators.required]],
        description: ['', [Validators.required]],
        category: [NTypes.ECategory.EVENT],
        date: [Validators.required],
        created_by: ['']
    });
    constructor(private fb: FormBuilder) {}
}
