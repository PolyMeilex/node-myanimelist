import { jikanGet, jikanUrl } from "./jikanApi.js";
class SeasonArchive {
    constructor() {
        this.baseUrl = `${jikanUrl}/season/archive`;
    }
    info() {
        return jikanGet(this.baseUrl);
    }
}
export default function () {
    return new SeasonArchive().info();
}
//# sourceMappingURL=seasonArchive.js.map