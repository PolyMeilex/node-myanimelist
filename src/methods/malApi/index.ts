/**
 * # MalAPI
 * Official MyAnimeList API
 *
 * Import:
 * ```ts
 * import { Mal } from "node-myanimelist";
 * ```
 * Initialize api ({@link Auth})
 * ```ts
 * const auth = Mal.auth("app_id")
 * ```
 * Use initialized api ({@link Auth}) to login:
 * - Unoffical way to login (not recomended) {@link Auth.Unstable.login}
 * ```ts
 * const acount = await auth.Unstable.login("username","password");
 * ```
 * - Offical way to login (recomended) {@link Auth.authorizeWithCode}
 *  - Generate pkce (in this example `pkce-challenge` npm package is used)
 *  ```ts
 *  import pkceChallenge from "pkce-challenge";
 *  const pkce = pkceChallenge();
 *  ```
 *  - Get OAuth url {@link Auth.getOAuthUrl}
 *  ```ts
 *  const url = auth.getOAuthUrl(pkce.code_challenge);
 *  ```
 *  - Open returned url, accept oauth and use returned code to authorize {@link Auth.authorizeWithCode}
 *  ```ts
 *  const acount = await auth.authorizeWithCode(code, code_challenge)
 *  ```
 *
 * You probably want to save acount somewhere, you can just call ```acount.stringifyToken()``` to get json
 *
 * Later you can load it using:
 * ```ts
 * const token = Mal.MalToken.fromJsonString(jsonStr);
 * const acount = auth.loadToken(token);
 * ```
 * If more time has passed you can also refresh token instead of loading last one
 * ```ts
 * const acount = await auth.authorizeWithRefreshToken(json.refresh_token);
 * ```
 * Finally you can use {@link MalAcount}
 * ```ts
 * let search = await acount.manga.search(
 *    "Sakurasou",
 *    Mal.Manga.fields().all()
 * ).call();
 * ```
 *
 * @packageDocumentation
 */

/** */

import MalRequest from "./request";
import { apiUrl, secondaryApiUrl } from "./api";
import { queryEncode } from "./util";

import { MalUser } from "./user";
import { MalAnime } from "./anime";
import { MalManga } from "./manga";
import { MalForum } from "./forum";
import { AxiosRequestConfig } from "axios";

export * as User from "./user";
export * as Anime from "./anime";
export * as Manga from "./manga";
export * as Common from "./common";
export * as Forum from "./forum";

export { ResponseError, MalError } from "./request";

/**
 * - {@link fromJsonObj}
 * - {@link fromJsonString}
 * - {@link fromRefreshToken}
 * - {@link fromAuthorizationCode}
 * - Unofficial
 *  - {@link fromCredential}
 */
export class MalToken {
  token_type: string;
  expires_in: number | null | undefined;
  access_token: string;
  refresh_token: string;

  constructor(
    tokenType: string,
    accessToken: string,
    refreshToken: string,
    expiresIn?: number | null
  ) {
    this.token_type = tokenType;
    this.expires_in = expiresIn;
    this.access_token = accessToken;
    this.refresh_token = refreshToken;
  }

  /**
   * Get MalToken From Token JSON Object
   */
  static fromJsonObj(obj: {
    token_type: string;
    access_token: string;
    refresh_token: string;
    expires_in?: number | null;
  }) {
    return new MalToken(
      obj.token_type,
      obj.access_token,
      obj.refresh_token,
      obj.expires_in
    );
  }

  /**
   * Get MalToken From Token JSON String
   */
  static fromJsonString(str: string) {
    let obj: {
      token_type: string;
      access_token: string;
      refresh_token: string;
      expires_in?: number | null;
    } = JSON.parse(str);
    return new MalToken(
      obj.token_type,
      obj.access_token,
      obj.refresh_token,
      obj.expires_in
    );
  }

  /**
   * **Unstable!**
   * Get MalToken From Login And Password
   */
  static async fromCredential(
    clientId: string,
    username: string,
    password: string
  ): Promise<MalToken> {
    const config: AxiosRequestConfig = {
      method: "POST",
      url: [apiUrl, "auth", "token"].join("/"),
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
      data: queryEncode({
        client_id: clientId,
        username,
        password,
        grant_type: "password",
      }),
    };

    const req = new MalRequest(config);

    const token: any = await req.call();

    return new MalToken(
      token.token_type,
      token.access_token,
      token.refresh_token,
      token.expires_in
    );
  }

  /**
   * Get MalToken From Refresh Token
   */
  static async fromRefreshToken(
    clientId: string,
    refreshToken: string
  ): Promise<MalToken> {
    const config: AxiosRequestConfig = {
      method: "POST",
      url: [secondaryApiUrl, "oauth2", "token"].join("/"),
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
      data: queryEncode({
        client_id: clientId,
        refresh_token: refreshToken,
        grant_type: "refresh_token",
      }),
    };

    const req = new MalRequest(config);

    const token: any = await req.call();

    return new MalToken(
      token.token_type,
      token.access_token,
      token.refresh_token,
      token.expires_in
    );
  }

  /**
   * Get MalToken From PKCE Authorization Code
   */
  static async fromAuthorizationCode(
    clientId: string,
    code: string,
    codeVerifier: string
  ): Promise<MalToken> {
    const config: AxiosRequestConfig = {
      method: "POST",
      url: [secondaryApiUrl, "oauth2", "token"].join("/"),
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
      data: queryEncode({
        client_id: clientId,
        grant_type: "authorization_code",
        code,
        code_verifier: codeVerifier,
      }),
    };

    const req = new MalRequest(config);

    const token: any = await req.call();

    return new MalToken(
      token.token_type,
      token.access_token,
      token.refresh_token,
      token.expires_in
    );
  }
}

/**
 * - {@link user} ({@link MalUser})
 *  - {@link MalUser.animelist}
 *  - {@link MalUser.mangalist}
 *  - {@link MalUser.info}
 * - {@link anime} ({@link MalAnime})
 *  - {@link MalAnime.search}
 *  - {@link MalAnime.details}
 *  - {@link MalAnime.ranking}
 *  - {@link MalAnime.seasonal}
 *  - {@link MalAnime.suggested}
 *  - {@link MalAnime.updateMyAnime}
 *  - {@link MalAnime.deleteMyAnime}
 * - {@link manga} ({@link MalManga})
 *  - {@link MalManga.search}
 *  - {@link MalManga.details}
 *  - {@link MalManga.ranking}
 *  - {@link MalManga.updateMyManga}
 *  - {@link MalManga.deleteMyManga}
 * - {@link forum} ({@link MalForum})
 *  - {@link MalForum.boards}
 *  - {@link MalForum.details}
 *  - {@link MalForum.topics}
 */

export class MalAcount {
  /** @hidden */
  private clientId: string;
  /** @hidden */
  malToken: MalToken | null;

  constructor(clientId: string, malToken: MalToken | null) {
    this.clientId = clientId;
    this.malToken = malToken;
  }

  /** @group Methods */
  user: MalUser = new MalUser(this);
  /** @group Methods */
  anime: MalAnime = new MalAnime(this);
  /** @group Methods */
  manga: MalManga = new MalManga(this);
  /** @group Methods */
  forum: MalForum = new MalForum(this);

  async refreshToken(): Promise<MalAcount> {
    if (this.malToken !== null) {
      this.malToken = await MalToken.fromRefreshToken(
        this.clientId,
        this.malToken.refresh_token
      );
    }
    return this;
  }

  getHttpHeaders() {
    const headers: { Authorization?: string; "X-MAL-CLIENT-ID": string } = {
      "X-MAL-CLIENT-ID": this.clientId,
    };

    if (this.malToken !== null) {
      headers["Authorization"] = `Bearer ${this.malToken["access_token"]}`;
    }

    return headers;
  }

  stringifyToken(): string | null {
    if (this.malToken !== null) {
      return JSON.stringify(this.malToken);
    } else {
      return null;
    }
  }
}

/**
 * Initialize {@link Auth}:
 * ```ts
 * const auth = Mal.auth("app_id")
 * ```
 * Use initialized {@link Auth} to login:
 * - Unoffical way to login (not recomended) {@link Auth.Unstable.login}
 * ```ts
 * const acount = await auth.Unstable.login("username","password");
 * ```
 * - Offical way to login (recomended) {@link Auth.authorizeWithCode}
 *  - Generate pkce (in this example `pkce-challenge` npm package is used)
 *  ```ts
 *  import pkceChallenge from "pkce-challenge";
 *  const pkce = pkceChallenge();
 *  ```
 *  - Get OAuth url {@link Auth.getOAuthUrl}
 *  ```ts
 *  const url = auth.getOAuthUrl(pkce.code_challenge);
 *  ```
 *  - Open returned url, accept oauth and use returned code to authorize {@link Auth.authorizeWithCode}
 *  ```ts
 *  const acount = await auth.authorizeWithCode(code, code_challenge)
 *  ```
 *
 * You probably want to save acount somewhere, you can just call ```acount.stringifyToken()``` to get json
 *
 * Later you can load it using:
 * ```ts
 * const token = Mal.MalToken.fromJsonString(jsonStr);
 * const acount = auth.loadToken(token);
 * ```
 * If more time has passed you can also refresh token instead of loading last one
 * ```ts
 * const acount = await auth.authorizeWithRefreshToken(json.refresh_token);
 * ```
 *
 * Done, you can use {@link MalAcount}
 */
export class Auth {
  private clientId: string;

  constructor(clientId: string) {
    this.clientId = clientId;
  }

  loadToken(token: MalToken) {
    return new MalAcount(this.clientId, token);
  }

  getOAuthUrl(codeChallenge: string) {
    const base = "https://myanimelist.net/v1/oauth2";
    return `${base}/authorize?response_type=code&client_id=${this.clientId}&code_challenge_method=plain&code_challenge=${codeChallenge}`;
  }

  async authorizeWithRefreshToken(refreshToken: string): Promise<MalAcount> {
    const malToken = await MalToken.fromRefreshToken(
      this.clientId,
      refreshToken
    );
    return new MalAcount(this.clientId, malToken);
  }

  async authorizeWithCode(
    code: string,
    /** it is actually a `code_verifier` but mal accepts code_challenge here instead */
    codeChallenge: string
  ): Promise<MalAcount> {
    const malToken = await MalToken.fromAuthorizationCode(
      this.clientId,
      code,
      codeChallenge
    );
    return new MalAcount(this.clientId, malToken);
  }

  async guestLogin(): Promise<MalAcount> {
    return new MalAcount(this.clientId, null);
  }

  /**
   * Undocumented Endpoints, those can disperse at any moment
   */
  Unstable = {
    /**
     * ### Login to API using login and password `(Unstable!)`
     *
     * This endpoint makes the whole idea of OAuth API pointless, so it will probably be removed soonish (EDIT: 4 years have passed it's still here)
     *
     * Example of paradox related to this endpoint is that you can use someone's app id to get access to API.
     * So basically it allows you to go around API request limits
     *
     * `(works reliably since 2018)`
     * `(2022 still works fine!)
     */
    login: async (username: string, password: string): Promise<MalAcount> => {
      const malToken = await MalToken.fromCredential(
        this.clientId,
        username,
        password
      );
      return new MalAcount(this.clientId, malToken);
    },
  };
}

export function auth(
  clientId: string = "6114d00ca681b7701d1e15fe11a4987e"
): Auth {
  return new Auth(clientId);
}
