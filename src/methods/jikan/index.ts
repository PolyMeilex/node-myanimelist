export { anime } from "./anime";
export { manga } from "./manga";

export { person } from "./person";
export { character } from "./character";

export { search } from "./search";

export { season } from "./season";
export { seasonArchive } from "./seasonArchive";
export { seasonLater } from "./seasonLater";

export { schedule } from "./schedule";
export { top } from "./top";
export { genre } from "./genre";

export { producer } from "./producer";
export { magazine } from "./magazine";

export { user } from "./user";

export { club } from "./club";

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

import * as internal from "./internalTypes";

const types = {
  /**
   * @deprecated Should be renamed to AnimeGenreId
   * @ignore
   */
  AnimeGenre: AnimeGenreId,
  AnimeGenreId,

  /**
   * @deprecated Should be renamed to MangaGenreId
   * @ignore
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

  internal,
};

export {
  // anime,
  // manga,
  // person,
  // character,
  // search,
  // season,
  // seasonArchive,
  // seasonLater,
  // schedule,
  // top,
  // genre,
  // producer,
  // magazine,
  // user,
  // club,
  types,
};
