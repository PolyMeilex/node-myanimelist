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

// Types
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
//

const types = {
  /**
   * @deprecated Should be renamed to AnimeGenreId
   */
  AnimeGenre: AnimeGenreId,
  AnimeGenreId,

  /**
   * @deprecated Should be renamed to MangaGenreId
   */
  MangaGenre: MangaGenreId,
  MangaGenreId,

  AnimeType,
  MangaType,
  AnimeStatus,
  MangaStatus,
  AnimeOrderBy,
  MangaOrderBy,
  Sort,
  Rating,
};

export {
  anime,
  manga,
  person,
  character,
  search,
  season,
  seasonArchive,
  seasonLater,
  schedule,
  top,
  genre,
  producer,
  magazine,
  user,
  club,
  types,
};
