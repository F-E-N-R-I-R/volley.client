import { Pager } from '@app/types';
import { STypes } from '@app/pages/auth/core/types/settings.types';

export namespace UTypes {
    import INotifications = STypes.INotifications;

    export interface IUser {
        fname: string;
        lname: string;
        pname: string;
        email: string;
        gender: EGender;
        phone: number;
        city: ECity;
        date_of_birth: string;
        language: ELanguage;
        theme: ETheme;
        avatar: string;
        notifications: INotifications;
    }

    export interface IUsersList {
        items: IUser[];
        pagination: Pager.IPager;
    }

    export enum EGender {
        MALE = 'male',
        FEMALE = 'female',
    }

    export enum ECity {
        KHARKOV = 'kharkov',
    }

    export enum ELanguage {
        RU = 'ru',
        EN = 'en',
    }

    export enum ETheme {
        WHITE = '1',
        BLACK = '2',
    }

}
