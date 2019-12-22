export namespace ETypes {
    export interface IEvent {
        name: string;
    }

    export interface IEventsList {
        items: IEvent[];
    }

    export interface IPlace {
        name: string;
        image: string;
    }
}
