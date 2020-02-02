import { ActionReducer } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';

export function loggerReducer(reducer: ActionReducer<any>): any {
    return storeLogger()(reducer);
}
