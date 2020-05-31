import { joinUrl } from "./url.js";
import { jikanGet, jikanUrl } from "./jikanApi.js";
class Magazine {
    constructor() {
        this.baseUrl = `${jikanUrl}/magazine`;
    }
    info(id, p) {
        let params = [String(id)];
        if (p != null)
            params[1] = String(p);
        return jikanGet(joinUrl(this.baseUrl, params));
    }
}
export default function (id, p) {
    return new Magazine().info(id, p);
}
//# sourceMappingURL=magazine.js.map