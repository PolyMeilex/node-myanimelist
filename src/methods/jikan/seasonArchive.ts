import * as urljoin from 'url-join';
import * as rp from 'request-promise-native';
import baseUrl from './jikanApi'

/**
 * ### All the years & their respective seasons that can be parsed from MyAnimeList
 */
export default function() {
    const link = urljoin(baseUrl,'season','archive');
    return new Promise( (res, rej) => {
        rp(link)
        .then( res => JSON.parse(res) )
        .then( json => res(json) )
        .catch( err => rej(`Error: ${err}`) )
    });
}