import { Component, OnDestroy } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { FiltersService } from '@news/core/services/news-filters.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
    templateUrl: 'filters.modal.html',
    styleUrls: ['filters.modal.scss'],
})
export class FiltersModalComponent implements OnDestroy {
    private ngUnsubscribe$: Subject<any> = new Subject();

    constructor(private fb: FormBuilder,
                private modal: ModalController,
                private filtersService: FiltersService,
    ) {
        this.filtersService.filters$
            .pipe(takeUntil(this.ngUnsubscribe$))
            .subscribe(filters => this.fillCategories(filters.categories));
    }

    public form: FormGroup = this.fb.group({
        categories: this.fb.array([])
    });

    public ngOnDestroy() {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();
    }

    public onSuccess() {
        return this.modal.dismiss(
            this.form.value.categories.reduce(
                (res, cat) => {
                    res.categories[cat.name] = cat.value;

                    return res;
                },
                { categories: {} },
            )
        );
    }

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
