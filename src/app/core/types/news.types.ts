export namespace NTypes {
    export interface INews {
        title: string;
        picture: string;
        description: string;
        category: ECategory;
        date: string;
        created_by: string;
    }

    export interface INewsList {
        items: INews[];
    }

    export enum ECategory {
        FVU = 'FVU',
        FVHO = 'FVHO',
        FIVB = 'FIVB',
        TEAM = 'TEAM',
        PLACE = 'PLACE',
        EVENT = 'EVENT',
    }

    export type TCategory = ECategory.FIVB
        | ECategory.FVU
        | ECategory.FVHO
        | ECategory.EVENT
        | ECategory.TEAM
        | ECategory.PLACE;
}
