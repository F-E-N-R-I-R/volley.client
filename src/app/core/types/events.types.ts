export namespace ETypes {
    export interface IEvent {
        id: string;
        title: string;
        logo: string;
        type?: string;
        date?: string[];
        indicators?: any[];
    }

    export interface IEventsList {
        items: IEvent[];
    }

    export interface IPlace {
        name: string;
        image: string;
    }

    export interface IEventsFilters {
        page?: number;
    }

}
