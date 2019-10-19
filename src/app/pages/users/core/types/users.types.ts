import { Pager } from '@app/types';

export namespace UTypes {
    export interface IUser {
        fname: string;
        lname: string;
    }

    export interface IUsersList {
        items: IUser[];
        pagination: Pager.IPager;
    }

}
