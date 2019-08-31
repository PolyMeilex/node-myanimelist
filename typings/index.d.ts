import anime from "./methods/jikan_v2/anime";
import manga from "./methods/jikan_v2/manga";
import person from "./methods/jikan_v2/person";
import character from "./methods/jikan_v2/character";
import season from "./methods/jikan_v2/season";
import seasonArchive from "./methods/jikan_v2/seasonArchive";
import seasonLater from "./methods/jikan_v2/seasonLater";
import schedule from "./methods/jikan_v2/schedule";
import top from "./methods/jikan_v2/top";
import genre from "./methods/jikan_v2/genre";
declare class JikanClient {
    anime: typeof anime;
    manga: typeof manga;
    person: typeof person;
    character: typeof character;
    season: typeof season;
    seasonArchive: typeof seasonArchive;
    seasonLater: typeof seasonLater;
    schedule: typeof schedule;
    top: typeof top;
    genre: typeof genre;
    Genres: {
        AnimeGenre: typeof import("./methods/jikan_v2/genreTypes").AnimeGenre;
        MangaGenre: typeof import("./methods/jikan_v2/genreTypes").MangaGenre;
    };
}
declare const Mal: JikanClient;
declare const version: any;
export { Mal, version, JikanClient };
export default Mal;
