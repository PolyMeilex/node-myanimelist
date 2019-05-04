import * as rp from "request-promise-native";
import { secondaryApiUrl } from "../mobileApis";

export default function (refresh_token: string, grant_type: string = "refresh_token", client_id: string = '6114d00ca681b7701d1e15fe11a4987e') {
    const request = {
        method: 'POST',
        url: secondaryApiUrl + '/oauth2/token',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        form: {
            client_id,
            refresh_token,
            grant_type
        }
    };

    return new Promise((res, rej) => {
        rp(request)
            .then(body => JSON.parse(body))
            .then(json => res(json))
            .catch(err => rej(err))
    })
}