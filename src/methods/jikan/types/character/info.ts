import VoiceActor from "./voiceActor";
import Ography from "../common/ography";

/** https://github.com/jikan-me/jikan/blob/master/src/Model/Character/Character.php */
export interface CharacterInfo {
  mal_id: number;
  url: string;

  name: string;
  name_kanji: string | null;

  nicknames: string[];
  about: string;
  member_favorites: number;

  image_url: string;
  animeography: Animeography[];
  mangaography: Mangaography[];
  voice_actors: VoiceActor[];

  request_cache_expiry: number;
  request_cached: boolean;
  request_hash: string;
}

/** src: https://github.com/jikan-me/jikan/blob/master/src/Model/Character/Animeography.php */
export interface Animeography extends Ography {}
/** src: https://github.com/jikan-me/jikan/blob/master/src/Model/Character/Mangaography.php */
export interface Mangaography extends Ography {}
