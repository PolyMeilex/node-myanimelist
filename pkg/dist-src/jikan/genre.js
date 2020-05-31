import { joinUrl } from "./url.js";
import { jikanGet, jikanUrl } from "./jikanApi.js";
class Genre {
    constructor() {
        this.baseUrl = `${jikanUrl}/genre`;
    }
    anime(genre, p) {
        let params = ["anime", String(genre)];
        if (p != null)
            params[2] = String(p);
        return jikanGet(joinUrl(this.baseUrl, params));
    }
    manga(genre, p) {
        let params = ["manga", String(genre)];
        if (p != null)
            params[2] = String(p);
        return jikanGet(joinUrl(this.baseUrl, params));
    }
}
export default function () {
    return new Genre();
}
//# sourceMappingURL=genre.js.map