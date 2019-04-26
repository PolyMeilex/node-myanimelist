import * as urljoin from 'url-join';
import * as rp from 'request-promise-native';
import baseUrl from './jikanApi'

type type = 'anime' | 'manga' | 'people' | 'characters'
type subtype = '' |
    'airing' | 'upcoming' | 'tv' | 'movie' | 'ova' | 'special' |
    'manga' | 'novels' | 'oneshots' | 'doujin' | 'manhwa' | 'manhua' |
    'bypopularity' | 'favorite'

/**
 * ### Top items on MyAnimeList
 * @param type Top items of this type: anime, manga, people, characters
 * @param page Page.
 * @param subtype 
 * - Anime: airing, upcoming, tv, movie, ova, special
 * - Manga: manga, novels, oneshots, doujin, manhwa, manhua
 * - Both: bypopularity, favorite
 */
export default function (type: type, page: number | string = '', subtype: subtype = '') {
    const link = urljoin(baseUrl, 'top', type, String(page), subtype);

    return new Promise((res, rej) => {
        rp(link)
            .then(res => JSON.parse(res))
            .then(json => res(json))
            .catch(err => rej(`Error: ${err}`))
    });
}