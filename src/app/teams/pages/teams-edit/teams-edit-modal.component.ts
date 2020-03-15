import { Component, OnDestroy } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EnumValues } from 'enum-values';
import { NTypes } from '@core/types';
import { AuthService } from '@auth/core/services';
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';


@Component({
    selector: 'teams-edit-modal',
    templateUrl: 'teams-edit-modal.component.html',
    styleUrls: ['teams-edit-modal.component.scss']
})

export class TeamsEditModalComponent implements OnDestroy {
    private ngUnsubscribe$ = new Subject();
    // public teams$: Observable<string[]> = this.authService.user$
    //     .pipe(
    //         map(({ teams }) => teams.map(({ name }) => name))
    //     );
    // public places$: Observable<string[]> = this.authService.user$
    //     .pipe(
    //         map(({ places }) => places.map(({ name }) => name))
    //     );
    // public events$: Observable<string[]> = this.authService.user$
    //     .pipe(
    //         map(({ events }) => events.map(({ name }) => name))
    //     );
    // public form: FormGroup = this.fb.group({
    //     title: [''],
    //     description: [''],
    //     id: [null],
    //     picture: [''],
    //     category: [null],
    //     date: [''],
    //     created_by: [null],
    //     team: [''],
    //     place: [''],
    //     events: [''],
    // });
    //
    // public categories = EnumValues.getValues(NTypes.ECategory);
    // public ECategory = NTypes.ECategory;
    //
    // constructor(private fb: FormBuilder,
    //             private modal: ModalController,
    //             private navParams: NavParams,
    //             private authService: AuthService,
    // ) {
    //     if (navParams.data.news) {
    //         this.form.setValue(navParams.data.news);
    //     }
    //
    // }

    ngOnDestroy(): void {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();
    }
}
