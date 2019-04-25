import * as urljoin from 'url-join';
import * as rp from 'request-promise-native';

type day = '' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday' | 'other' | 'unknown';

/**
 * ### Anime of the specified season
 * **Note:** If you don't pass the day parameter, it'll return the schedule for all days of the week
 * @param day Day of week: monday, tuesday, wednesday, thursday, friday, saturday, sunday, other, unknown.
 */
export default function (day: day = '') {
    const link = urljoin(global['jikanBaseUrl'],'schedule',String(day));

    return new Promise((res, rej) => {
        rp(link)
            .then(res => JSON.parse(res))
            .then(json => res(json))
            .catch(err => rej(`Error: ${err}`))
    });
}