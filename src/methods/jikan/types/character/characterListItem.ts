import VoiceActor from "./voiceActor";

/** src: https://github.com/jikan-me/jikan/blob/master/src/Model/Character/CharacterListItem.php */
export default interface CharacterListItem {
  mal_id: number;
  url: string;
  image_url: string;

  name: string;
  role: CharacterRole;
  voice_actors: VoiceActor[];
}

export enum CharacterRole {
  Main = "Main",
  Supporting = "Supporting",
}
