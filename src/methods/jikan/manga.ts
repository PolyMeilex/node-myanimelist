import * as urljoin from 'url-join';
import * as rp from 'request-promise-native';

type request =
    | ''
    | 'characters'
    | 'news'
    | 'pictures'
    | 'stats'
    | 'forum'
    | 'moreinfo'
    | 'reviews'
    | 'recommendations'
    | 'userupdates';

/**
 * ### A single manga object with all its details
 * @param id Id on MyAnimeList.
 * @param request Request types: 'characters','news','pictures','stats','forum','moreinfo','reviews','recommendations','userupdates'.
 * @param parameter Page number.
 */
export default function (id: number, request: request = '', parameter: number | string = '') {
    let link = urljoin(global['jikanBaseUrl'], "manga", String(id), request, String(parameter));

    return new Promise( (res, rej) => {
        rp(link)
        .then( res => JSON.parse(res) )
        .then( json => res(json) )
        .catch( err => rej(`Error: ${err}`) )
    });
}