declare type type = 'anime' | 'manga' | 'people' | 'characters';
declare type subtype = '' | 'airing' | 'upcoming' | 'tv' | 'movie' | 'ova' | 'special' | 'manga' | 'novels' | 'oneshots' | 'doujin' | 'manhwa' | 'manhua' | 'bypopularity' | 'favorite';
/**
 * ### Top items on MyAnimeList
 * @param type Top items of this type: anime, manga, people, characters
 * @param page Page.
 * @param subtype
 * - Anime: airing, upcoming, tv, movie, ova, special
 * - Manga: manga, novels, oneshots, doujin, manhwa, manhua
 * - Both: bypopularity, favorite
 */
export default function (type: type, page?: number | string, subtype?: subtype): Promise<{}>;
export {};
