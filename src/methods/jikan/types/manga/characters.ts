import { Character } from "../";

/** src: ? */
export interface Characters {
  characters: Character[];

  request_cache_expiry: number;
  request_cached: boolean;
  request_hash: string;
}

/** src: https://github.com/jikan-me/jikan/blob/master/src/Model/Manga/CharacterListItem.php */
export interface Character {
  mal_id: number;
  url: string;
  image_url: string;
  name: string;
  role: Character.Role;
}
