import AnimeGenre from "./types/animeGenre";
import MangaGenre from "./types/mangaGenre";
declare class Genre {
    private baseUrl;
    constructor();
    private jikanGet;
    anime(genre: AnimeGenre, p?: number): Promise<import("axios").AxiosResponse<any>>;
    manga(genre: MangaGenre, p?: number): Promise<import("axios").AxiosResponse<any>>;
}
export default function (): Genre;
export {};
