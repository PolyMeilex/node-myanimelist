declare type type = "anime" | "manga";
/**
 * ### Anime/Manga items of the genre
 * @param type anime,manga.
 * @param genre_id Genre ID from MyAnimeList.
 * @param page Page.
 */
export default function (type: type, genre_id: number, page?: number | string): Promise<{}>;
export {};
