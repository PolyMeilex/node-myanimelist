import { joinUrl } from "./url.js";
import { jikanGet, jikanUrl } from "./jikanApi.js";
class Anime {
    constructor(id) {
        this.baseUrl = `${jikanUrl}/anime/${id}`;
    }
    info() {
        return jikanGet(this.baseUrl);
    }
    charactersStaff() {
        return jikanGet(joinUrl(this.baseUrl, ["characters_staff"]));
    }
    episodes(p) {
        let params = ["episodes"];
        if (p != null)
            params.push(String(p));
        return jikanGet(joinUrl(this.baseUrl, params));
    }
    news() {
        return jikanGet(joinUrl(this.baseUrl, ["news"]));
    }
    pictures() {
        return jikanGet(joinUrl(this.baseUrl, ["pictures"]));
    }
    videos() {
        return jikanGet(joinUrl(this.baseUrl, ["videos"]));
    }
    stats() {
        return jikanGet(joinUrl(this.baseUrl, ["stats"]));
    }
    forum() {
        return jikanGet(joinUrl(this.baseUrl, ["forum"]));
    }
    moreInfo() {
        return jikanGet(joinUrl(this.baseUrl, ["moreinfo"]));
    }
    reviews(p) {
        let params = ["reviews"];
        if (p != null)
            params.push(String(p));
        return jikanGet(joinUrl(this.baseUrl, params));
    }
    recommendations() {
        return jikanGet(joinUrl(this.baseUrl, ["recommendations"]));
    }
    userUpdates(p) {
        let params = ["userupdates"];
        if (p != null)
            params.push(String(p));
        return jikanGet(joinUrl(this.baseUrl, params));
    }
}
export default function (id) {
    return new Anime(id);
}
//# sourceMappingURL=anime.js.map