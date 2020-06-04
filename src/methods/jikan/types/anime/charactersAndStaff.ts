import CharacterListItem from "../character/characterListItem";

/** src: https://github.com/jikan-me/jikan/blob/master/src/Model/Anime/AnimeCharactersAndStaff.php */
export interface AnimeCharactersAndStaff {
  characters: CharacterListItem[];
  staff: StaffListItem[];

  request_cache_expiry: number;
  request_cached: boolean;
  request_hash: string;
}
export default AnimeCharactersAndStaff;

/** src: https://github.com/jikan-me/jikan/blob/master/src/Model/Anime/StaffListItem.php */
export interface StaffListItem {
  mal_id: number;
  url: string;
  name: string;
  image_url: string;
  positions: string[];
}
