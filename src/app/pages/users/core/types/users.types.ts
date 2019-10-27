import { Pager } from '@app/types';
import { STypes } from '@app/pages/settings/core/types/settings.types';

export namespace UTypes {
    import INotifications = STypes.INotifications;

    export interface IUser {
        fname: string;
        lname: string;
        pname: string;
        notifications: INotifications;
    }

    export interface IUsersList {
        items: IUser[];
        pagination: Pager.IPager;
    }

}
