import { joinUrl } from "./url.js";
import { jikanGet, jikanUrl } from "./jikanApi.js";
class Character {
    constructor(id) {
        this.baseUrl = `${jikanUrl}/character/${id}`;
    }
    info() {
        return jikanGet(this.baseUrl);
    }
    pictures() {
        return jikanGet(joinUrl(this.baseUrl, ["pictures"]));
    }
}
export default function (id) {
    return new Character(id);
}
//# sourceMappingURL=character.js.map