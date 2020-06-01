import MalUrl from "./malUrl";

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
