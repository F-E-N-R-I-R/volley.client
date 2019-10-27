import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromSetting from '../reducers/settings.reducer';

export const getCompleteCoreState = createSelector(
    fromFeature.getSettingsState,
    (state: fromFeature.SettingState) => state.settings,
);

export const getListSettings = createSelector(
    getCompleteCoreState,
    fromSetting.getSettings,
);

export const getListPending = createSelector(
    getCompleteCoreState,
    fromSetting.getLoading,
);

export const getListError = createSelector(
    getCompleteCoreState,
    fromSetting.getError,
);
