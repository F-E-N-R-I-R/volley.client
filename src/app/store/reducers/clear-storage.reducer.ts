import { APP_CLEAR_STORAGE } from '../actions';
import { ActionReducer } from '@ngrx/store';

export function clearStorageReducer(reducer: ActionReducer<any>) {
    return (state, action) => {
        let nextState = state;
        if (action.type === APP_CLEAR_STORAGE) {
            nextState = undefined;
        }

        return reducer(nextState, action);
    };
}
