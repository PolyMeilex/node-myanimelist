import { CharacterRole } from "../character/characterListItem";

/** src: ? */
export interface MangaCharacters {
  characters: MangaCharacter[];

  request_cache_expiry: number;
  request_cached: boolean;
  request_hash: string;
}

/** src: https://github.com/jikan-me/jikan/blob/master/src/Model/Manga/CharacterListItem.php */
export interface MangaCharacter {
  mal_id: number;
  url: string;
  image_url: string;
  name: string;
  role: CharacterRole;
}
