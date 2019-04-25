import { SearchFilter } from "./methods/jikan/search";
import { ListsOBJ } from "./methods/poly/list";
import { LoginData } from "./methods/poly/noApiLogin";
import { animeUpdatesOBJ } from "./methods/poly/animeUpdates";
declare class Mal {
    anime(id: number, request?: string, parameter?: number): Promise<any>;
    manga(id: number, request?: string): Promise<any>;
    person(id: number, request?: string): Promise<any>;
    character(id: number, request?: string): Promise<any>;
    search(type: string, query: string, filter?: SearchFilter): Promise<Array<any>>;
    season(year: number, season: string): Promise<any>;
    seasonArchive(): Promise<any>;
    schedule(day: string): Promise<any>;
    top(type: string, page?: number, subtype?: string): Promise<any>;
    genre(type: string, genre_id?: number, page?: number): Promise<any>;
    producer(producer_id: number, page?: number): Promise<any>;
    user(username: string, request?: string, argument?: any, argument2?: any): Promise<any>;
    avatar(name: string): Promise<string>;
    list(name: string): Promise<ListsOBJ>;
    animeUpdates(name: string): Promise<animeUpdatesOBJ[]>;
    days(name: string, type?: string): Promise<number>;
    login(login: string, password: string): Promise<LoginData>;
    notifications(log: LoginData): Promise<any>;
    animeEdit(sendJsonBody: any, log: LoginData): Promise<any>;
}
declare const obj: Mal;
export default obj;
