import AnimeGenre from "./types/animeGenre";
import MangaGenre from "./types/mangaGenre";
declare class Genre {
    private baseUrl;
    constructor();
    anime(genre: AnimeGenre, p?: number): Promise<any>;
    manga(genre: MangaGenre, p?: number): Promise<any>;
}
export default function (): Genre;
export {};
