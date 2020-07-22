/** src: https://github.com/jikan-me/jikan/blob/master/src/Model/Common/MalUrl.php */
export interface MalUrl {
  name: string;
  url: string;
  mal_id: number;
  type: MalUrlType;
}

export enum MalUrlType {
  Anime = "anime",
  Manga = "manga",
  Character = "character",
  Profile = "profile",
  People = "people",
}
