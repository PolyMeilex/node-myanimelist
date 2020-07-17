import { Common } from "../";

export * from "./info";
export * from "./episodes";
export * from "./charactersAndStaff";

export * from "./videos";

export * from "./stats";
export * from "./forum";
export * from "./moreInfo";

export * from "./reviews";
export * from "./recommendations";
export * from "./userUpdates";

export { Pictures } from "../common/pictures";
export { NewsInfo } from "../news";

export enum GenreId {
  action = 1,
  adventure = 2,
  cars = 3,
  comedy = 4,
  dementia = 5,
  demons = 6,
  mystery = 7,
  drama = 8,
  ecchi = 9,
  fantasy = 10,
  game = 11,
  hentai = 12,
  historical = 13,
  horror = 14,
  kids = 15,
  magic = 16,
  martialArts = 17,
  mecha = 18,
  music = 19,
  parody = 20,
  samurai = 21,
  romance = 22,
  school = 23,
  sciFi = 24,
  shoujo = 25,
  shoujoAi = 26,
  shounen = 27,
  shounenAi = 28,
  space = 29,
  sports = 30,
  superPower = 31,
  vampire = 32,
  yaoi = 33,
  yuri = 34,
  harem = 35,
  sliceOfLife = 36,
  supernatural = 37,
  military = 38,
  police = 39,
  psychological = 40,
  thriller = 41,
  seinen = 42,
  josei = 43,
}

export enum OrderBy {
  title = "title",
  start_date = "start_date",
  end_date = "end_date",
  score = "score",
  type = "type",
  members = "members",
  id = "id",
  episodes = "episodes",
  rating = "rating",
}

export enum Status {
  airing = "airing",
  completed = "completed",
  to_be_aired = "to_be_aired",
}

export enum Type {
  tv = "tv",
  ova = "ova",
  movie = "movie",
  special = "special",
  ona = "ona",
  music = "music",
}

/** src: https://github.com/jikan-me/jikan/blob/master/src/Model/Genre/AnimeGenre.php */
export interface Genre {
  mal_url: Common.MalUrl;
  item_count: number;
  anime: Common.AnimeCard[];

  request_cache_expiry: number;
  request_cached: boolean;
  request_hash: string;
}

export enum Rating {
  g = "g",
  ph = "pg",
  pg13 = "pg13",
  r17 = "r17",
  r = "r",
  rx = "rx",
}

export enum Sort {
  ascending = "ascending",
  descending = "descending",
}
