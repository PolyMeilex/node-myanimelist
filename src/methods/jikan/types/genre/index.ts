import MalUrl from "../common/malUrl";

/** src: https://github.com/jikan-me/jikan/blob/master/src/Model/Genre/AnimeGenre.php */
export interface AnimeGenre {
  mal_url: MalUrl;
  item_count: number;
  anime: AnimeCard[];

  request_cache_expiry: number;
  request_cached: boolean;
  request_hash: string;
}

/** src: https://github.com/jikan-me/jikan/blob/master/src/Model/Common/AnimeCard.php */
export interface AnimeCard {
  mal_id: number;
  url: string;
  title: string;

  image_url: string;
  synopsis: string;
  type: string | CardAnimeType;

  airing_start: Date | null;
  episodes: number | null;
  members: number;

  genres: MalUrl[];
  source: string | AnimeSource;
  producers: MalUrl[];

  score: number | null;
  licensors: string[];
  r18: boolean;
  kids: boolean;
}

export enum AnimeSource {
  Empty = "-",
  Manga = "Manga",
  Novel = "Novel",
  The4KomaManga = "4-koma manga",
  VisualNovel = "Visual novel",
  WebManga = "Web manga",
}

export enum CardAnimeType {
  Movie = "Movie",
  ONA = "ONA",
  OVA = "OVA",
  Special = "Special",
  TV = "TV",
}

/** src: https://github.com/jikan-me/jikan/blob/master/src/Model/Genre/MangaGenre.php */
export interface MangaGenre {
  mal_url: MalUrl;
  item_count: number;
  manga: MangaCard[];

  request_cache_expiry: number;
  request_cached: boolean;
  request_hash: string;
}

/** src: https://github.com/jikan-me/jikan/blob/master/src/Model/Common/MangaCard.php */
export interface MangaCard {
  mal_id: number;
  url: string;
  title: string;

  image_url: string;
  synopsis: string;
  type: string | CardMangaType;

  publishing_start: Date | null;
  volumes: number | null;
  members: number;

  genres: MalUrl[];
  authors: MalUrl[];
  score: number;
  serialization: string[];
}

export enum CardMangaType {
  Doujinshi = "Doujinshi",
  Manga = "Manga",
  Manhwa = "Manhwa",
  Novel = "Novel",
}
