import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { IEventsState, eventsListReducer } from '@events/core/reducers/events.reducer';
import { FiltersState, filtersReducer } from '@events/core/reducers/events-filters.reducer';

export interface EventState {
    list: IEventsState;
    filters: FiltersState;
}

export const reducers: ActionReducerMap<EventState> = {
    list: eventsListReducer,
    filters: filtersReducer,
};

export const getEventsState = createFeatureSelector<EventState>('events');
