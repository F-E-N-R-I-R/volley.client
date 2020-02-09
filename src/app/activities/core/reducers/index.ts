import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { IActivitiesState, activitiesListReducer } from '@activities/core/reducers/activities.reducer';
import { FiltersState, filtersReducer } from '@activities/core/reducers/activities-filters.reducer';

export interface ActivityState {
    list: IActivitiesState;
    filters: FiltersState;
}

export const reducers: ActionReducerMap<ActivityState> = {
    list: activitiesListReducer,
    filters: filtersReducer,
};

export const getActivitiesState = createFeatureSelector<ActivityState>('activitiesList');
export const getFiltersState = createFeatureSelector<ActivityState>('filters');
