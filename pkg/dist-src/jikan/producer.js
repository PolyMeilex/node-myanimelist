import { joinUrl } from "./url.js";
import { jikanGet, jikanUrl } from "./jikanApi.js";
class Producer {
    constructor() {
        this.baseUrl = `${jikanUrl}/producer`;
    }
    info(id, p) {
        let params = [String(id)];
        if (p != null)
            params[1] = String(p);
        return jikanGet(joinUrl(this.baseUrl, params));
    }
}
export default function (id, p) {
    return new Producer().info(id, p);
}
//# sourceMappingURL=producer.js.map