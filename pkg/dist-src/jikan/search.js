import { joinUrl } from "./url.js";
import { jikanGet, jikanUrl } from "./jikanApi.js";
class Search {
    constructor() {
        this.baseUrl = `${jikanUrl}/search`;
    }
    search(type, params) {
        let qparams = Object.keys(params)
            .filter((k) => params[k] != null)
            .map((k) => `${k}=${encodeURIComponent(params[k])}`)
            .join("&");
        return jikanGet(joinUrl(this.baseUrl, [type, "?" + qparams]));
    }
    anime(params) {
        return this.search("anime", params);
    }
    manga(params) {
        return this.search("manga", params);
    }
    person(params) {
        return this.search("person", params);
    }
    character(params) {
        return this.search("character", params);
    }
}
export default function () {
    return new Search();
}
//# sourceMappingURL=search.js.map