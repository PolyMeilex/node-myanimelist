import { jikanGet, jikanUrl } from "./jikanApi.js";
class SeasonLater {
    constructor() {
        this.baseUrl = `${jikanUrl}/season/later`;
    }
    info() {
        return jikanGet(this.baseUrl);
    }
}
export default function () {
    return new SeasonLater().info();
}
//# sourceMappingURL=seasonLater.js.map