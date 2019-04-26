import * as urljoin from 'url-join';
import * as rp from 'request-promise-native';
import baseUrl from './jikanApi'

type searchTypeT = 'anime' | 'manga' | 'person' | 'character';
type statusT = 'airing' | 'completed' | 'complete' | 'tba' | 'upcoming';
type ratedT = 'g' | 'pg' | 'pg13' | 'r17' | 'r' | 'rx';
type filterTypeT =
    | 'tv'
    | 'ova'
    | 'movie'
    | 'special'
    | 'ona'
    | 'music'
    | 'manga'
    | 'novel'
    | 'oneshot'
    | 'doujin'
    | 'manhwa'
    | 'manhua';

/**
 * ### Advanced Search Parameters
 * - q
 * - page
 * - type
 * - status
 * - rated
 * - genre
 * - score
 * - start_date
 * - end_date
 * - genre_exclude
 * - limit
 */
export interface SearchParameters {
    q: string;
    page?: number;
    type?: filterTypeT;
    status?: statusT;
    rated?: ratedT;
    genre?: number;
    score?: number;
    start_date?: string;
    end_date?: string;
    genre_exclude?: 0 | 1;
    limit?: number;
}

/**
 * ### Search results for the query
 * @param type Specify what to search: anime, manga, person, character.
 * @param sp Advanced Search Parameters [Read More:Jikan Doc](https://jikan.docs.apiary.io/#reference/0/search).
 */
export default function (type: searchTypeT, sp: SearchParameters) {
    let params = Object.keys(sp)
        .filter(k => sp[k] != null)
        .map(k => `${k}=${encodeURIComponent(sp[k])}`)
        .join('&');

    let link = urljoin(baseUrl, "search", type, `?${params}`);
    console.log(link)
    return new Promise((res, rej) => {
        rp(link)
            .then(res => JSON.parse(res))
            .then(json => res(json))
            .catch(err => rej(`Error: ${err}`))
    });
}
