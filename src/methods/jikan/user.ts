import { joinUrl } from "./url";
import { jikanGet, jikanUrl } from "./jikanApi";

/**
 * # User
 *
 * #### For more info visit <a href="https://jikan.docs.apiary.io/#reference/0/user" target="_blank">https://jikan.docs.apiary.io</a>
 *
 * ### Create User Object
 * ```ts
 * let user = Mal.user("username");
 * ```
 *
 * ### Get User Profile
 * ```ts
 * user.profile();
 * ```
 *
 * ### Get User History
 * ```ts
 * user.history().all();
 * //            .anime()
 * //            .manga()
 * ```
 *
 * ### Get User Friends
 * ```ts
 * user.friends(page?);
 * ```
 *
 * ### Get User List
 * All posible params [here](https://jikan.docs.apiary.io/#reference/0/user)
 * ```ts
 * let params = {
 *    search: "q",
 *    sort: "order_by"
 * };
 *
 * let animelist = user.animelist(page?);
 * animelist.all(params);
 * animelist.watching(params);
 * animelist.onhold(params);
 * animelist.dropped(params);
 * animelist.plantowatch(params);
 *
 * let mangalist = user.mangalist(page?);
 * mangalist.all(params);
 * mangalist.reading(params);
 * mangalist.onhold(params);
 * mangalist.dropped(params);
 * mangalist.plantoread(params);
 * ```
 */
export class User {
  /** @ignore */
  private baseUrl: string;
  constructor(username: string) {
    this.baseUrl = `${jikanUrl}/user/${username}`;
  }
  profile() {
    return jikanGet(joinUrl(this.baseUrl, ["profile"]));
  }
  history() {
    return new UserHistory(this.baseUrl);
  }
  friends(p?: number) {
    let params: string[] = ["friends"];
    if (p != null) params.push(String(p));
    return jikanGet(joinUrl(this.baseUrl, params));
  }
  animelist(p?: number) {
    return new UserAnimelist(this.baseUrl, p);
  }
  mangalist(p?: number) {
    return new UserMangalist(this.baseUrl, p);
  }
}

export class UserHistory {
  private baseUrl: string;
  constructor(baseUrl: string) {
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

export class UserAnimelist {
  private baseUrl: string;
  private page: string;
  constructor(baseUrl: string, p?: number) {
    this.baseUrl = baseUrl;

    if (p != null) this.page = String(p);
    else this.page = "1";
  }
  private getList(params: string[], qparams?: any) {
    if (qparams != null) {
      let qparams = Object.keys(params) as string[];

      let out = qparams
        .map((key) => {
          return {
            key,
            param: params[key as any] as string,
          };
        })
        .filter((p) => p.param != null)
        .map((k) => `${k}=${encodeURIComponent(params[k as any])}`)
        .join("&");

      params.push(out);
    }

    const url = joinUrl(this.baseUrl, params);

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

export class UserMangalist {
  private baseUrl: string;
  private page: string;
  constructor(baseUrl: string, p?: number) {
    this.baseUrl = baseUrl;

    if (p != null) this.page = String(p);
    else this.page = "1";
  }
  private getList(params: string[], qparams?: any) {
    if (qparams != null) {
      let qparams = Object.keys(params) as string[];

      let out = qparams
        .map((key) => {
          return {
            key,
            param: params[key as any] as string,
          };
        })
        .filter((p) => p.param != null)
        .map((k) => `${k}=${encodeURIComponent(params[k as any])}`)
        .join("&");

      params.push(out);
    }

    const url = joinUrl(this.baseUrl, params);

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

export function user(username: string): User {
  return new User(username);
}
