import * as urljoin from 'url-join';
import * as rp from 'request-promise-native';
import baseUrl from './jikanApi'

type request =
    | ''
    | 'profile'
    | 'history'
    | 'friends'
    | 'animelist'
    | 'mangalist';

/**
 * ### User related data
 * @param username Username on MyAnimeList.
 * @param request Request types: 'profile','history','friends','animelist','mangalist'.
 */
export default function (username: string, request: request = '', argument: any = '', argument2: any = '') {
    let link = urljoin(baseUrl, "user", username, request, String(argument), String(argument2));

    return new Promise((res, rej) => {
        rp(link)
            .then(res => JSON.parse(res))
            .then(json => res(json))
            .catch(err => rej(err))
    });
}