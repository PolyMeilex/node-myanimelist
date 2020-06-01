/** src: https://github.com/jikan-me/jikan/blob/master/src/Model/Anime/Episodes.php */
export default interface Episodes {
    episodes_last_page: number;
    episodes: EpisodeListItem[];
    request_cache_expiry: number;
    request_cached: boolean;
    request_hash: string;
}
/** src: https://github.com/jikan-me/jikan/blob/master/src/Model/Anime/EpisodeListItem.php */
interface EpisodeListItem {
    episode_id: number;
    title: string;
    title_japanese?: string;
    title_romanji?: string;
    aired?: Date;
    filler: boolean;
    recap: boolean;
    video_url: string;
    forum_url: string;
}
export {};
