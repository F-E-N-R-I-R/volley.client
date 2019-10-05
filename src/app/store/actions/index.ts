import { Action } from '@ngrx/store';

export const APP_CLEAR_STORAGE = '[APP] CLEAR STORAGE';
export class ClearStorage implements Action {
    readonly type = APP_CLEAR_STORAGE;
    constructor() {}
}

export type CoreActions =
    | ClearStorage;
