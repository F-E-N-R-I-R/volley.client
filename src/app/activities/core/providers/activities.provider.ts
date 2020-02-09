import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ActivityMockProvider } from '@app/mock/activities.mock.provider';

@Injectable()
export class ActivitiesProvider {

    constructor(private http: HttpClient, private activityMockProvider: ActivityMockProvider) {}

    getList(): Observable<any> {
        return this.activityMockProvider.getAllActivity();
    }
}
