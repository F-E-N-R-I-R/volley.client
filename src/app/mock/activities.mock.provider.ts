import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ATypes } from '@core/types';

@Injectable()
export class ActivityMockProvider {
    constructor() {}

    getAllActivity(): Observable<ATypes.IActivityList> {
        return new BehaviorSubject({
            items: [
                { name: 'Activities1' },
                { name: 'Activities2' },
                { name: 'Activities3' },
            ]
        });
    }
}
