import anime from "./anime";
import manga from "./manga";
import person from "./person";
import character from "./character";
import search from "./search";
import season from "./season";
import seasonArchive from "./seasonArchive";
import seasonLater from "./seasonLater";
import schedule from "./schedule";
import top from "./top";
import genre from "./genre";
import producer from "./producer";
import magazine from "./magazine";
import user from "./user";
import club from "./club";
import AnimeGenreId from "./types/animeGenre";
import MangaGenreId from "./types/mangaGenre";
import AnimeType from "./types/animeType";
import MangaType from "./types/mangaType";
import AnimeStatus from "./types/animeStatus";
import MangaStatus from "./types/mangaStatus";
import AnimeOrderBy from "./types/animeOrderBy";
import MangaOrderBy from "./types/mangaOrderBy";
import Sort from "./types/sort";
import Rating from "./types/rating";
declare const types: {
    /**
     * @deprecated Should be renamed to AnimeGenreId
     */
    AnimeGenre: typeof AnimeGenreId;
    AnimeGenreId: typeof AnimeGenreId;
    /**
     * @deprecated Should be renamed to MangaGenreId
     */
    MangaGenre: typeof MangaGenreId;
    MangaGenreId: typeof MangaGenreId;
    AnimeType: typeof AnimeType;
    MangaType: typeof MangaType;
    AnimeStatus: typeof AnimeStatus;
    MangaStatus: typeof MangaStatus;
    AnimeOrderBy: typeof AnimeOrderBy;
    MangaOrderBy: typeof MangaOrderBy;
    Sort: typeof Sort;
    Rating: typeof Rating;
};
export { anime, manga, person, character, search, season, seasonArchive, seasonLater, schedule, top, genre, producer, magazine, user, club, types, };
