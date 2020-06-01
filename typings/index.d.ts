import * as Mal from "./methods/jikan";
import login from "./methods/poly/noApiLogin";
import notifications from "./methods/poly/loginRequired/notifications";
import animeEdit from "./methods/poly/loginRequired/animeEdit";
declare class ScraperClient {
    login: typeof login;
    notifications: typeof notifications;
    animeEdit: typeof animeEdit;
}
declare const version: any;
export { Mal, version, ScraperClient };
export default Mal;
