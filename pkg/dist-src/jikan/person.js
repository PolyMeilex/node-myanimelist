import { joinUrl } from "./url.js";
import { jikanGet, jikanUrl } from "./jikanApi.js";
class Person {
    constructor(id) {
        this.baseUrl = `${jikanUrl}/person/${id}`;
    }
    info() {
        return jikanGet(this.baseUrl);
    }
    pictures() {
        return jikanGet(joinUrl(this.baseUrl, ["pictures"]));
    }
}
export default function (id) {
    return new Person(id);
}
//# sourceMappingURL=person.js.map