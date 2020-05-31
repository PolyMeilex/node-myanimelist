import { joinUrl } from "./url.js";
import { jikanGet, jikanUrl } from "./jikanApi.js";
class Club {
    constructor(id) {
        this.baseUrl = `${jikanUrl}/club/${id}`;
    }
    info() {
        return jikanGet(this.baseUrl);
    }
    members(p) {
        let params = ["members"];
        if (p != null)
            params.push(String(p));
        return jikanGet(joinUrl(this.baseUrl, params));
    }
}
export default function (id) {
    return new Club(id);
}
//# sourceMappingURL=club.js.map