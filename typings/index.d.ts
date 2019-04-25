import MalMobileClient from "./methods/poly/mobileApi/malMobileClient";
declare class MalClient {
    anime: (id: number, request?: string, parameter?: number) => Promise<{}>;
    manga: (id: number, request?: string) => Promise<{}>;
    person: (id: string, request?: string) => Promise<{}>;
    character: (id: number, request?: string) => Promise<{}>;
    search: (type: string, query: string, filter?: import("./methods/jikan/search").SearchFilter) => Promise<{}>;
    season: (year: number, season: string) => Promise<{}>;
    seasonArchive: () => Promise<{}>;
    schedule: (day: string) => Promise<{}>;
    top: (type: string, page?: number, subtype?: string) => Promise<{}>;
    genre: (type: string, genre_id?: number, page?: number) => Promise<{}>;
    producer: (producer_id: number, page?: number) => Promise<{}>;
    user: (username: string, request?: "profile" | "history" | "friends" | "animelist" | "mangalist", argument?: any, argument2?: any) => Promise<{}>;
    avatar: (name: string) => Promise<{}>;
    list: (name: string) => Promise<{}>;
    animeUpdates: (name: string) => Promise<{}>;
    days: (name: string, type?: string) => Promise<{}>;
    login: (login: string, password: string) => Promise<{}>;
    notifications: (log: import("./methods/poly/noApiLogin").LoginData) => Promise<{}>;
    animeEdit: (sendJsonBody: any, log: import("./methods/poly/noApiLogin").LoginData) => Promise<{}>;
}
declare const Mal: MalClient;
declare const version: any;
export { Mal, version, MalClient, MalMobileClient };
export default Mal;
