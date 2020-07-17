import { VoiceActor } from "./";

/** src: https://github.com/jikan-me/jikan/blob/master/src/Model/Character/CharacterListItem.php */
export interface CharacterListItem {
  mal_id: number;
  url: string;
  image_url: string;

  name: string;
  role: Role;
  voice_actors: VoiceActor[];
}

export enum Role {
  Main = "Main",
  Supporting = "Supporting",
}
