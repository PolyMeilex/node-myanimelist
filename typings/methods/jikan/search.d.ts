import AnimeGenre from "./types/animeGenre";
import MangaGenre from "./types/mangaGenre";
import AnimeType from "./types/animeType";
import MangaType from "./types/mangaType";
import AnimeStatus from "./types/animeStatus";
import MangaStatus from "./types/mangaStatus";
import AnimeOrderBy from "./types/animeOrderBy";
import MangaOrderBy from "./types/mangaOrderBy";
import Sort from "./types/sort";
import Rating from "./types/rating";
interface AdvancedSearchParameters {
    q?: string;
    page?: number;
    type?: AnimeType | MangaType;
    status?: AnimeStatus | MangaStatus;
    rated?: Rating;
    genre?: AnimeGenre | MangaGenre;
    score?: number;
    start_date?: string;
    end_date?: string;
    genre_exclude?: 0 | 1;
    limit?: number;
    order_by?: AnimeOrderBy | MangaOrderBy;
    sort?: Sort;
    producer?: number;
    magazine?: number;
    letter?: string;
}
declare class Search {
    private baseUrl;
    constructor();
    private jikanGet;
    search(type: string, params: AdvancedSearchParameters): Promise<import("axios").AxiosResponse<any>>;
    anime(params: AdvancedSearchParameters): Promise<import("axios").AxiosResponse<any>>;
    manga(params: AdvancedSearchParameters): Promise<import("axios").AxiosResponse<any>>;
    person(params: AdvancedSearchParameters): Promise<import("axios").AxiosResponse<any>>;
    character(params: AdvancedSearchParameters): Promise<import("axios").AxiosResponse<any>>;
}
export default function (): Search;
export {};
