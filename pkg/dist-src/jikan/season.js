import { joinUrl } from "./url.js";
import { jikanGet, jikanUrl } from "./jikanApi.js";
class Season {
    constructor() {
        this.baseUrl = `${jikanUrl}/season`;
    }
    info(year, season) {
        return jikanGet(joinUrl(this.baseUrl, [String(year), String(season)]));
    }
}
export default function (year, season) {
    return new Season().info(year, season);
}
//# sourceMappingURL=season.js.map