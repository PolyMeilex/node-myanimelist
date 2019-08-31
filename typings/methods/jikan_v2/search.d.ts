declare class Search {
    private baseUrl;
    constructor();
    private jikanGet;
    search(type: string, params: string): void;
    anime(params: any): void;
    manga(params: any): void;
    person(params: any): void;
    character(params: any): void;
}
export default function (): Search;
export {};
