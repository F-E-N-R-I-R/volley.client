import { Pager, STypes, TTypes, ETypes } from '@core/types';

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
        sports_category: ECategory;
        teams: TTypes.ITeam[];
        places: ETypes.IPlace[];
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
        KHARKOV = 'KHARKOV',
        POLTAVA = 'POLTAVA',
    }

    export enum ELanguage {
        RUSSIAN = 'ru',
        ENGLISH = 'en',
        UKRAINIAN = 'ua',
    }

    export enum ETheme {
        WHITE = 'white',
        BLACK = 'black',
    }

    export enum ECategory {
        FIRST = 'FIRST',
        SECOND = 'SECOND',
        THIRD = 'THIRD',
        FYR = 'FYR',
        SYR = 'SYR',
        TYR = 'TYR',
        CMSU = 'CMSU',
        MSU = 'MSU',
        MSWC = 'MSWC',
    }

    export interface IBodyParam {
        name: string;
        min: number;
        max: number;
        color: string;
    }

    export type TCategory = ECategory.CMSU
        | ECategory.MSU
        | ECategory.MSWC
        | ECategory.TYR
        | ECategory.SYR
        | ECategory.FYR
        | ECategory.THIRD
        | ECategory.SECOND
        | ECategory.FIRST;
}
