import MalUrl from "./malUrl";

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
  OneShot = "One-shot",
}
