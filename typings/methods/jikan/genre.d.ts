import { Req } from "./jikanApi";
import AnimeGenreId from "./types/animeGenre";
import MangaGenreId from "./types/mangaGenre";
import { AnimeGenre, MangaGenre } from "./types/genre";
export declare class Genre {
    private baseUrl;
    constructor();
    anime(genre: AnimeGenreId, p?: number): Req<AnimeGenre>;
    manga(genre: MangaGenreId, p?: number): Req<MangaGenre>;
}
export default function (): Genre;
