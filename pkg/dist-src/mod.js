import anime from "./jikan/anime.js";
import manga from "./jikan/manga.js";
import person from "./jikan/person.js";
import character from "./jikan/character.js";
import search from "./jikan/search.js";
import season from "./jikan/season.js";
import seasonArchive from "./jikan/seasonArchive.js";
import seasonLater from "./jikan/seasonLater.js";
import schedule from "./jikan/schedule.js";
import top from "./jikan/top.js";
import genre from "./jikan/genre.js";
import producer from "./jikan/producer.js";
import magazine from "./jikan/magazine.js";
import user from "./jikan/user.js";
import club from "./jikan/club.js";
// Types
import AnimeGenre from "./jikan/types/animeGenre.js";
import MangaGenre from "./jikan/types/mangaGenre.js";
import AnimeType from "./jikan/types/animeType.js";
import MangaType from "./jikan/types/mangaType.js";
import AnimeStatus from "./jikan/types/animeStatus.js";
import MangaStatus from "./jikan/types/mangaStatus.js";
import AnimeOrderBy from "./jikan/types/animeOrderBy.js";
import MangaOrderBy from "./jikan/types/mangaOrderBy.js";
import Sort from "./jikan/types/sort.js";
import Rating from "./jikan/types/rating.js";
//
class JikanClient {
    constructor() {
        //Jikan API
        this.anime = anime;
        this.manga = manga;
        this.person = person;
        this.character = character;
        this.search = search;
        this.season = season;
        this.seasonArchive = seasonArchive;
        this.seasonLater = seasonLater;
        this.schedule = schedule;
        this.top = top;
        this.genre = genre;
        this.producer = producer;
        this.magazine = magazine;
        this.user = user;
        this.club = club;
        this.types = {
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
export { Mal, JikanClient, }; //ScraperClient };
export default Mal;
//# sourceMappingURL=mod.js.map