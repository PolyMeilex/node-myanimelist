import Mal from "../";
import { main } from "./mal/index";

// import pkceChallenge from "pkce-challenge";
// const pkce = pkceChallenge();
const pkce = {
  code_challenge: "YGPBICGddpnGlq2bZxDL7GQtsNjKOld8Xv7eEFOJKYY",
  code_verifier: "YMIUGMD.QSZj4x4~84zEioVPHXY6eoUiQ~4A1MC2xyJ",
};

import assert from "assert";

describe("MalAPI", async () => {
  const clientId = "6114d00ca681b7701d1e15fe11a4987e";

  it("OAuth Url", () => {
    const mal = Mal.api(clientId);

    let res = mal.getOauthUrl(pkce.code_challenge);
    console.log(res);

    const base = "https://myanimelist.net/v1/oauth2";
    const url = `${base}/authorize?response_type=code&client_id=${clientId}&code_challenge_method=plain&code_challenge=${pkce.code_challenge}`;

    assert.equal(url, res);
  });

  it("Login With Code", async () => {
    const mal = Mal.api(clientId);

    const code = process.env["MAL_CODE"];

    if (code) {
      const res = await mal.authorizationCode(code, pkce.code_challenge);
      console.log(res);
    }
  });

  it("Login Form Env", () => {
    // let acount = await mal.unstable.login(l, p);
  });
  it("Token From Env", async () =>
    await main(
      new Mal.MalToken("Bearer", process.env["MAL_TOKEN"], "...", 2678400)
    ));
});
