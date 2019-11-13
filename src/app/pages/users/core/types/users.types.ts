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
        height: number;
        weight: number;
        chest_girt: number;
        waist: number;
        hip_girth: number;
        shoe_size: number;
        sports_category: string;
        teams: string;
        places: string;
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
        KHARKOV = 'Kharkov',
    }

    export enum ELanguage {
        RUSSIAN = 'ru',
        ENGLISH = 'en',
    }

    export enum ETheme {
        WHITE = 'white',
        BLACK = 'black',
    }

}
