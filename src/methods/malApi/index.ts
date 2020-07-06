import MalRequest from "./request";
import { apiUrl, secondaryApiUrl } from "./mobileApis";
import { queryEncode } from "./util";
import { MalUser } from "./users";

export * as Users from "./users";

export class MalToken {
  token_type: string;
  expires_in: number | null;
  access_token: string;
  refresh_token: string;

  constructor(
    tokenType: string,
    accessToken: string,
    refreshToken: string,
    expiresIn: number | null
  ) {
    this.token_type = tokenType;
    this.expires_in = expiresIn;
    this.access_token = accessToken;
    this.refresh_token = refreshToken;
  }

  static async fromCredential(
    username: string,
    password: string,
    clientId: string
  ): Promise<MalToken> {
    const req = new MalRequest([apiUrl, "/auth/token"]);
    req.method = "post";
    req.headers = { "content-type": "application/x-www-form-urlencoded" };
    req.data = queryEncode({
      client_id: clientId,
      username,
      password,
      grant_type: "password",
    });

    const token = await req.call();

    return new MalToken(
      token.token_type,
      token.access_token,
      token.refresh_token,
      token.expires_in
    );
  }

  static async fromRefreshToken(
    refreshToken: string,
    clientId: string
  ): Promise<MalToken> {
    const req = new MalRequest([secondaryApiUrl, "/oauth2/token"]);
    req.method = "post";
    req.headers = { "content-type": "application/x-www-form-urlencoded" };
    req.data = queryEncode({
      client_id: clientId,
      refresh_token: refreshToken,
      grant_type: "password",
    });
    const token = await req.call();

    return new MalToken(
      token.token_type,
      token.access_token,
      token.refresh_token,
      token.expires_in
    );
  }
}

export class MalAcount {
  clientId: string;
  malToken: MalToken;

  constructor(clientId: string, malToken: MalToken) {
    this.clientId = clientId;
    this.malToken = malToken;
  }

  user(name: string = "@me"): MalUser {
    return new MalUser(this, name);
  }

  async refreshToken(): Promise<MalAcount> {
    this.malToken = await MalToken.fromRefreshToken(
      this.malToken.refresh_token,
      this.clientId
    );
    return this;
  }
}

export class Api {
  clientId: string;

  constructor(clientId: string) {
    this.clientId = clientId;
  }

  async login(username: string, password: string): Promise<MalAcount> {
    const malToken = await MalToken.fromCredential(
      username,
      password,
      this.clientId
    );
    return new MalAcount(this.clientId, malToken);
  }

  async refresh(refreshToken: string): Promise<MalAcount> {
    const malToken = await MalToken.fromRefreshToken(
      refreshToken,
      this.clientId
    );
    return new MalAcount(this.clientId, malToken);
  }
}

export function api(
  clientId: string = "6114d00ca681b7701d1e15fe11a4987e"
): Api {
  return new Api(clientId);
}
