import anime from "./methods/jikan/anime";
import manga from "./methods/jikan/manga";
import person from "./methods/jikan/person";
import character from "./methods/jikan/character";

import search from "./methods/jikan/search";

import season from "./methods/jikan/season";
import seasonArchive from "./methods/jikan/seasonArchive";
import seasonLater from "./methods/jikan/seasonLater";

import schedule from "./methods/jikan/schedule";
import top from "./methods/jikan/top";
import genre from "./methods/jikan/genre";

import producer from "./methods/jikan/producer";
import magazine from "./methods/jikan/magazine";

import user from "./methods/jikan/user";

import club from "./methods/jikan/club";

// Types
import AnimeGenre from "./methods/jikan/types/animeGenre";
import MangaGenre from "./methods/jikan/types/mangaGenre";

import AnimeType from "./methods/jikan/types/animeType";
import MangaType from "./methods/jikan/types/mangaType";

import AnimeStatus from "./methods/jikan/types/animeStatus";
import MangaStatus from "./methods/jikan/types/mangaStatus";

import AnimeOrderBy from "./methods/jikan/types/animeOrderBy";
import MangaOrderBy from "./methods/jikan/types/mangaOrderBy";

import Sort from "./methods/jikan/types/sort";
import Rating from "./methods/jikan/types/rating";
//

class JikanClient {
  //Jikan API
  public anime = anime;
  public manga = manga;
  public person = person;
  public character = character;

  public search = search;

  public season = season;
  public seasonArchive = seasonArchive;
  public seasonLater = seasonLater;

  public schedule = schedule;
  public top = top;
  public genre = genre;

  public producer = producer;
  public magazine = magazine;

  public user = user;

  public club = club;

  public types = {
    AnimeGenre,
    MangaGenre,
    AnimeType,
    MangaType,
    AnimeStatus,
    MangaStatus,
    AnimeOrderBy,
    MangaOrderBy,
    Sort,
    Rating
  };
}

import login from "./methods/poly/noApiLogin";
import notifications from "./methods/poly/loginRequired/notifications";
import animeEdit from "./methods/poly/loginRequired/animeEdit";

class ScraperClient {
  public login = login;
  public notifications = notifications;
  public animeEdit = animeEdit;
}

const Mal = new JikanClient();
const { version } = require("../package.json");
export { Mal, version, JikanClient, ScraperClient };
export default Mal;
