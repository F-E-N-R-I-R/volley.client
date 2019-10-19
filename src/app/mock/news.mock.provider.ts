import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class NewsMockProvider {
    constructor() {}

    getAllNews(): Observable<any> {
        return new BehaviorSubject({items: ['News1', 'News2', 'News3']});
    }
}
