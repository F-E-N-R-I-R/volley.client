export namespace NTypes {
    export interface INews {
        id: any;
        title: string;
        picture: string;
        description: string;
        category: ECategory;
        date: string;
        created_by: string;
    }

    export interface IFilters {
        categories: ICategories;
    }

    export interface ICategories {
        fivb: boolean;
        fvu: boolean;
        fvho: boolean;
        teams: boolean;
        places: boolean;
        events: boolean;
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
