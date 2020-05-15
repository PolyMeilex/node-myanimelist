import anime from "./methods/jikan/anime.js";
import manga from "./methods/jikan/manga.js";
import person from "./methods/jikan/person.js";
import character from "./methods/jikan/character.js";

import search from "./methods/jikan/search.js";

import season from "./methods/jikan/season.js";
import seasonArchive from "./methods/jikan/seasonArchive.js";
import seasonLater from "./methods/jikan/seasonLater.js";

import schedule from "./methods/jikan/schedule.js";
import top from "./methods/jikan/top.js";
import genre from "./methods/jikan/genre.js";

import producer from "./methods/jikan/producer.js";
import magazine from "./methods/jikan/magazine.js";

import user from "./methods/jikan/user.js";

import club from "./methods/jikan/club.js";

// Types
import AnimeGenre from "./methods/jikan/types/animeGenre.js";
import MangaGenre from "./methods/jikan/types/mangaGenre.js";

import AnimeType from "./methods/jikan/types/animeType.js";
import MangaType from "./methods/jikan/types/mangaType.js";

import AnimeStatus from "./methods/jikan/types/animeStatus.js";
import MangaStatus from "./methods/jikan/types/mangaStatus.js";

import AnimeOrderBy from "./methods/jikan/types/animeOrderBy.js";
import MangaOrderBy from "./methods/jikan/types/mangaOrderBy.js";

import Sort from "./methods/jikan/types/sort.js";
import Rating from "./methods/jikan/types/rating.js";
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

// import login from "./methods/poly/noApiLogin";
// import notifications from "./methods/poly/loginRequired/notifications";
// import animeEdit from "./methods/poly/loginRequired/animeEdit";

// class ScraperClient {
//   public login = login;
//   public notifications = notifications;
//   public animeEdit = animeEdit;
// }

const Mal = new JikanClient();
export { Mal, JikanClient, };//ScraperClient };
export default Mal;
