import Mal from "../";
import { main } from "./mal/index";

describe("MalAPI", async () => {
  it("Login Form Env", () => {
    // let acount = await mal.unstable.login(l, p);
  });
  it("Token From Env", async () =>
    await main(
      new Mal.MalToken("Bearer", process.env["MAL_TOKEN"], "...", 2678400)
    ));
});
