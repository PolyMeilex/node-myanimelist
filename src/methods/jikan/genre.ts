import * as urljoin from 'url-join';
import * as rp from 'request-promise-native';

type type = 'anime' | 'manga';

/**
 * ### Anime/Manga items of the genre
 * @param type anime,manga.
 * @param genre_id Genre ID from MyAnimeList.
 * @param page Page.
 */
export default function (type: type, genre_id: number, page: number | string = '') {
    const link = urljoin(global['jikanBaseUrl'], 'genre', type, String(genre_id), String(page));

    return new Promise((res, rej) => {
        rp(link)
            .then(res => JSON.parse(res))
            .then(json => res(json))
            .catch(err => rej(`Error: ${err}`))
    });
}