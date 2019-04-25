//Jikan API
import anime from "./methods/jikan/anime";
import manga from "./methods/jikan/manga";
import person from "./methods/jikan/person";
import character from "./methods/jikan/character";

import season from "./methods/jikan/season";
import seasonArchive from "./methods/jikan/seasonArchive";
import schedule from "./methods/jikan/schedule";
import search from "./methods/jikan/search";

import top from "./methods/jikan/top";
import genre from "./methods/jikan/genre";
import producer from "./methods/jikan/producer";
import user from "./methods/jikan/user";
//Poly Methods
import avatar from "./methods/poly/avatar";
import list from "./methods/poly/list";
import animeUpdates from "./methods/poly/animeUpdates";

import days from "./methods/poly/days";
import login from "./methods/poly/noApiLogin";

import notifications from "./methods/poly/loginRequired/notifications";
import animeEdit from "./methods/poly/loginRequired/animeEdit";

class MalClient {
  //Jikan API
  public anime = anime;
  public manga = manga;
  public person = person;
  public character = character;
  public search = search;
  public season = season;
  public seasonArchive = seasonArchive;
  public schedule = schedule;
  public top = top;
  public genre = genre;
  public producer = producer;
  public user = user;

  //Poly Methods
  public avatar = avatar;
  public list = list;
  public animeUpdates = animeUpdates;

  //Poly Methods (Api is down methods)
  public days = days;
  public login = login;

  public notifications = notifications;
  public animeEdit = animeEdit;
}

global["jikanBaseUrl"] = "https://api.jikan.moe/v3"

const Mal = new MalClient();
const { version } = require('../package.json');
export { Mal, version, MalClient };
export default Mal;