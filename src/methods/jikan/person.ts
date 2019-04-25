import * as urljoin from 'url-join';
import * as rp from 'request-promise-native';

type request =
    | ''
    | 'pictures';

/**
 * ### A single person object with all its details
 * @param id Id on MyAnimeList.
 * @param request Request types: 'pictures'.
 */
export default function (id: number, request: request = '') {
    let link = urljoin(global['jikanBaseUrl'], "person", String(id), request);
 
    return new Promise( (res, rej) => {
        rp(link)
        .then( res => JSON.parse(res) )
        .then( json => res(json) )
        .catch( err => rej(`Error: ${err}`) )
    });
}