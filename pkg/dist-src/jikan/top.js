import { joinUrl } from "./url.js";
import { jikanGet, jikanUrl } from "./jikanApi.js";
class Top {
    constructor() {
        this.baseUrl = `${jikanUrl}/top`;
    }
    anime() {
        return new TopAnime(this.baseUrl);
    }
    manga() {
        return new TopManga(this.baseUrl);
    }
    people() {
        return new TopSimple(this.baseUrl, "people");
    }
    characters() {
        return new TopSimple(this.baseUrl, "characters");
    }
}
// Class For "people" And "characters"
class TopSimple {
    constructor(baseUrl, type) {
        this.baseUrl = baseUrl;
        this.type = type;
    }
    topGet(p, subType) {
        let params = [this.type];
        if (p != null)
            params[1] = String(p);
        else
            params[1] = "1";
        params[2] = subType;
        const url = joinUrl(this.baseUrl, params);
        return jikanGet(url);
    }
    all(p) {
        return this.topGet(p, "");
    }
}
class TopAnime {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    topGet(p, subType) {
        let params = ["anime"];
        if (p != null)
            params[1] = String(p);
        else
            params[1] = "1";
        params[2] = subType;
        const url = joinUrl(this.baseUrl, params);
        return jikanGet(url);
    }
    all(p) {
        return this.topGet(p, "");
    }
    airing(p) {
        return this.topGet(p, "airing");
    }
    upcoming(p) {
        return this.topGet(p, "upcoming");
    }
    tv(p) {
        return this.topGet(p, "tv");
    }
    movie(p) {
        return this.topGet(p, "movie");
    }
    ova(p) {
        return this.topGet(p, "ova");
    }
    special(p) {
        return this.topGet(p, "special");
    }
    byPopularity(p) {
        return this.topGet(p, "bypopularity");
    }
    favorite(p) {
        return this.topGet(p, "favorite");
    }
}
class TopManga {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    topGet(p, subType) {
        let params = ["manga"];
        if (p != null)
            params[1] = String(p);
        else
            params[1] = "1";
        params[2] = subType;
        const url = joinUrl(this.baseUrl, params);
        return jikanGet(url);
    }
    all(p) {
        return this.topGet(p, "");
    }
    manga(p) {
        return this.topGet(p, "manga");
    }
    novels(p) {
        return this.topGet(p, "novels");
    }
    oneshots(p) {
        return this.topGet(p, "oneshots");
    }
    doujin(p) {
        return this.topGet(p, "doujin");
    }
    manhwa(p) {
        return this.topGet(p, "manhwa");
    }
    manhua(p) {
        return this.topGet(p, "manhua");
    }
    byPopularity(p) {
        return this.topGet(p, "bypopularity");
    }
    favorite(p) {
        return this.topGet(p, "favorite");
    }
}
export default function () {
    return new Top();
}
//# sourceMappingURL=top.js.map