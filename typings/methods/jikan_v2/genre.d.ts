import AnimeGenre from "./types/animeGenre";
import MangaGenre from "./types/mangaGenre";
declare class Genre {
    private baseUrl;
    constructor();
    private jikanGet;
    anime(genre: AnimeGenre, p?: number): void;
    manga(genre: MangaGenre, p?: number): void;
}
export default function (): Genre;
export {};
