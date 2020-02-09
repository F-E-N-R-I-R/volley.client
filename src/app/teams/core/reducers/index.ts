import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { TeamsState, teamsListReducer } from '@teams/core/reducers/teams.reducer';
import { FiltersState, filtersReducer } from '@teams/core/reducers/teams-filters.reducer';

export interface NewState {
    list: TeamsState;
    filters: FiltersState;
}

export const reducers: ActionReducerMap<NewState> = {
    list: teamsListReducer,
    filters: filtersReducer,
};

export const getTeamsState = createFeatureSelector<NewState>('teams');
