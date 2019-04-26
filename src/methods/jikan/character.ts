import * as urljoin from 'url-join';
import * as rp from 'request-promise-native';
import baseUrl from './jikanApi'

type request =
    | ''
    | 'pictures';

/**
 * ### A single character object with all its details
 * @param id Id on MyAnimeList.
 * @param request Request types: 'pictures'.
 */
export default function (id: number, request: request = '') {
    let link = urljoin(baseUrl, "character", String(id), request);

    return new Promise((res, rej) => {
        rp(link)
            .then(res => JSON.parse(res))
            .then(json => res(json))
            .catch(err => rej(`Error: ${err}`))
    });
}