export namespace TTypes {
    export interface ITeam {
        name: string;
        image: string;
    }

    export interface ITeamsList {
        items: ITeam[];
    }
    // tslint:disable-next-line:no-empty-interface
    export interface ITeamFilter {
    }
}
