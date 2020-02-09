import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ActivityMockProvider } from '@app/mock/activities.mock.provider';
import { ATypes } from '@core/types';

@Injectable()
export class ActivitiesProvider {

    constructor(private http: HttpClient, private activityMockProvider: ActivityMockProvider) {}

    getList(filters: ATypes.IActivityFilter): Observable<any> {
        return this.activityMockProvider.getAllActivity();
    }
}
