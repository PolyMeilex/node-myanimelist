/** src: https://github.com/jikan-me/jikan/blob/master/src/Model/Character/VoiceActor.php */
export default interface VoiceActor {
    mal_id: number;
    name: string;
    url: string;
    image_url: string;
    language: Language;
}
declare enum Language {
    English = "English",
    French = "French",
    German = "German",
    Hungarian = "Hungarian",
    Italian = "Italian",
    Japanese = "Japanese",
    Korean = "Korean",
    Spanish = "Spanish"
}
export {};
