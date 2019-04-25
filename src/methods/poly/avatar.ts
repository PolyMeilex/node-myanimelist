import * as rp from "request-promise-native";
import * as cheerio from "cheerio";

export default function (name: string) {
    return new Promise((res, rej) => {
        rp(`https://myanimelist.net/profile/${name}`)
            .then(res => cheerio.load(res))
            .then($ => $('img', 'div.user-image'))
            .then(img => img.attr('src'))
            .then(url => res(url))
            .catch(err => rej("Image Not Found"))
    });
}