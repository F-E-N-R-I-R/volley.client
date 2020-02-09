import { MetaReducer } from '@ngrx/store';
import { clearStorageReducer } from '@store/reducers/clear-storage.reducer';
import { localStorageSyncReducer } from '@store/reducers/local-storage-sync.reducer';
import { loggerReducer } from '@store/reducers/logger.reducer';

export * from '@store/reducers/clear-storage.reducer';
export * from '@store/reducers/route.reducer';
export * from '@store/reducers/local-storage-sync.reducer';
export * from '@store/reducers/logger.reducer';

export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer, clearStorageReducer, loggerReducer];
