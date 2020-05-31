import { joinUrl } from "./url.js";
import { jikanGet, jikanUrl } from "./jikanApi.js";
class Schedule {
    constructor() {
        this.baseUrl = `${jikanUrl}/schedule`;
    }
    all() {
        return jikanGet(this.baseUrl);
    }
    monday() {
        return jikanGet(joinUrl(this.baseUrl, ["monday"]));
    }
    tuesday() {
        return jikanGet(joinUrl(this.baseUrl, ["tuesday"]));
    }
    wednesday() {
        return jikanGet(joinUrl(this.baseUrl, ["wednesday"]));
    }
    thursday() {
        return jikanGet(joinUrl(this.baseUrl, ["thursday"]));
    }
    friday() {
        return jikanGet(joinUrl(this.baseUrl, ["friday"]));
    }
    saturday() {
        return jikanGet(joinUrl(this.baseUrl, ["saturday"]));
    }
    sunday() {
        return jikanGet(joinUrl(this.baseUrl, ["sunday"]));
    }
    other() {
        return jikanGet(joinUrl(this.baseUrl, ["other"]));
    }
    unknown() {
        return jikanGet(joinUrl(this.baseUrl, ["unknown"]));
    }
}
export default function () {
    return new Schedule();
}
//# sourceMappingURL=schedule.js.map