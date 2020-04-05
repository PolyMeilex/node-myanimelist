import { joinUrl } from "./url";
import { jikanGet, jikanUrl } from "./jikanApi";

class User {
  private baseUrl: string;
  constructor(username: string) {
    this.baseUrl = `${jikanUrl}/user/${username}`;
  }
  profile() {
    return jikanGet(joinUrl(this.baseUrl, ["profile"]));
  }
  history() {
    return new UserHistory(this);
  }
  friends(p?: number) {
    let params: string[] = ["friends"];
    if (p != null) params.push(String(p));
    return jikanGet(joinUrl(this.baseUrl, params));
  }
  animelist(p?: number) {
    return new UserAnimelist(this, p);
  }
  mangalist(p?: number) {
    return new UserMangalist(this, p);
  }
}

class UserHistory {
  private parent: User;
  constructor(parent: User) {
    this.parent = parent;
  }
  all() {
    // @ts-ignore
    const url = joinUrl(this.parent.baseUrl, ["history"]);

    return jikanGet(url);
  }
  anime() {
    // @ts-ignore
    const url = joinUrl(this.parent.baseUrl, ["history", "anime"]);

    return jikanGet(url);
  }
  manga() {
    // @ts-ignore
    const url = joinUrl(this.parent.baseUrl, ["history", "manga"]);

    return jikanGet(url);
  }
}

class UserAnimelist {
  private parent: User;
  private page: string;
  constructor(parent: User, p?: number) {
    this.parent = parent;

    if (p != null) this.page = String(p);
    else this.page = "1";
  }
  private getList(params: string[], qparams?: Object) {
    if (qparams != null) {
      let qparams = Object.keys(params)
        .filter((k) => params[k] != null)
        .map((k) => `${k}=${encodeURIComponent(params[k])}`)
        .join("&");
      params.push(qparams);
    }
    // @ts-ignore
    const url = joinUrl(this.parent.baseUrl, params);

    return jikanGet(url);
  }
  all(qparams?: Object) {
    return this.getList(["animelist", "all", this.page], qparams);
  }
  watching(qparams?: Object) {
    return this.getList(["animelist", "watching", this.page], qparams);
  }
  onhold(qparams?: Object) {
    return this.getList(["animelist", "onhold", this.page], qparams);
  }
  dropped(qparams?: Object) {
    return this.getList(["animelist", "dropped", this.page], qparams);
  }
  plantowatch(qparams?: Object) {
    return this.getList(["animelist", "plantowatch", this.page], qparams);
  }
}

class UserMangalist {
  private parent: User;
  private page: string;
  constructor(parent: User, p?: number) {
    this.parent = parent;

    if (p != null) this.page = String(p);
    else this.page = "1";
  }
  private getList(params: string[], qparams?: Object) {
    if (qparams != null) {
      let qparams = Object.keys(params)
        .filter((k) => params[k] != null)
        .map((k) => `${k}=${encodeURIComponent(params[k])}`)
        .join("&");
      params.push(qparams);
    }
    // @ts-ignore
    const url = joinUrl(this.parent.baseUrl, params);

    return jikanGet(url);
  }
  all(qparams?: Object) {
    return this.getList(["mangalist", "all", this.page], qparams);
  }
  reading(qparams?: Object) {
    return this.getList(["mangalist", "reading", this.page], qparams);
  }
  onhold(qparams?: Object) {
    return this.getList(["mangalist", "onhold", this.page], qparams);
  }
  dropped(qparams?: Object) {
    return this.getList(["mangalist", "dropped", this.page], qparams);
  }
  plantoread(qparams?: Object) {
    return this.getList(["mangalist", "plantoread", this.page], qparams);
  }
}

export default function (username: string): User {
  return new User(username);
}
