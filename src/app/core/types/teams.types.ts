export namespace TTypes {
    export interface ITeam {
        title: string;
        logo: string;
        contact: string;
        indicators: any[];
        id: string;
    }

    export interface ITeamsList {
        items: ITeam[];
    }
    // tslint:disable-next-line:no-empty-interface
    export interface ITeamFilter {
    }
}
