import { joinUrl } from "./url.js";
import { jikanGet, jikanUrl } from "./jikanApi.js";
class User {
    constructor(username) {
        this.baseUrl = `${jikanUrl}/user/${username}`;
    }
    profile() {
        return jikanGet(joinUrl(this.baseUrl, ["profile"]));
    }
    history() {
        return new UserHistory(this.baseUrl);
    }
    friends(p) {
        let params = ["friends"];
        if (p != null)
            params.push(String(p));
        return jikanGet(joinUrl(this.baseUrl, params));
    }
    animelist(p) {
        return new UserAnimelist(this.baseUrl, p);
    }
    mangalist(p) {
        return new UserMangalist(this.baseUrl, p);
    }
}
class UserHistory {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    all() {
        const url = joinUrl(this.baseUrl, ["history"]);
        return jikanGet(url);
    }
    anime() {
        const url = joinUrl(this.baseUrl, ["history", "anime"]);
        return jikanGet(url);
    }
    manga() {
        const url = joinUrl(this.baseUrl, ["history", "manga"]);
        return jikanGet(url);
    }
}
class UserAnimelist {
    constructor(baseUrl, p) {
        this.baseUrl = baseUrl;
        if (p != null)
            this.page = String(p);
        else
            this.page = "1";
    }
    getList(params, qparams) {
        if (qparams != null) {
            let qparams = Object.keys(params)
                .filter((k) => params[k] != null)
                .map((k) => `${k}=${encodeURIComponent(params[k])}`)
                .join("&");
            params.push(qparams);
        }
        const url = joinUrl(this.baseUrl, params);
        return jikanGet(url);
    }
    all(qparams) {
        return this.getList(["animelist", "all", this.page], qparams);
    }
    watching(qparams) {
        return this.getList(["animelist", "watching", this.page], qparams);
    }
    onhold(qparams) {
        return this.getList(["animelist", "onhold", this.page], qparams);
    }
    dropped(qparams) {
        return this.getList(["animelist", "dropped", this.page], qparams);
    }
    plantowatch(qparams) {
        return this.getList(["animelist", "plantowatch", this.page], qparams);
    }
}
class UserMangalist {
    constructor(baseUrl, p) {
        this.baseUrl = baseUrl;
        if (p != null)
            this.page = String(p);
        else
            this.page = "1";
    }
    getList(params, qparams) {
        if (qparams != null) {
            let qparams = Object.keys(params)
                .filter((k) => params[k] != null)
                .map((k) => `${k}=${encodeURIComponent(params[k])}`)
                .join("&");
            params.push(qparams);
        }
        const url = joinUrl(this.baseUrl, params);
        return jikanGet(url);
    }
    all(qparams) {
        return this.getList(["mangalist", "all", this.page], qparams);
    }
    reading(qparams) {
        return this.getList(["mangalist", "reading", this.page], qparams);
    }
    onhold(qparams) {
        return this.getList(["mangalist", "onhold", this.page], qparams);
    }
    dropped(qparams) {
        return this.getList(["mangalist", "dropped", this.page], qparams);
    }
    plantoread(qparams) {
        return this.getList(["mangalist", "plantoread", this.page], qparams);
    }
}
export default function (username) {
    return new User(username);
}
//# sourceMappingURL=user.js.map