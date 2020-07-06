export * as Jikan from "./methods/jikan";
import * as Mal from "./methods/malApi";

import login from "./methods/poly/noApiLogin";
import notifications from "./methods/poly/loginRequired/notifications";
import animeEdit from "./methods/poly/loginRequired/animeEdit";

class ScraperClient {
  public login = login;
  public notifications = notifications;
  public animeEdit = animeEdit;
}

const { version } = require("../package.json");

export { version, Mal, ScraperClient };
export default Mal;
