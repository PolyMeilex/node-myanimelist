import { joinUrl } from "./url.js";
import { jikanGet, jikanUrl } from "./jikanApi.js";
class Manga {
    constructor(id) {
        this.baseUrl = `${jikanUrl}/manga/${id}`;
    }
    info() {
        return jikanGet(this.baseUrl);
    }
    characters() {
        return jikanGet(joinUrl(this.baseUrl, ["characters"]));
    }
    news() {
        return jikanGet(joinUrl(this.baseUrl, ["news"]));
    }
    pictures() {
        return jikanGet(joinUrl(this.baseUrl, ["pictures"]));
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
    return new Manga(id);
}
//# sourceMappingURL=manga.js.map