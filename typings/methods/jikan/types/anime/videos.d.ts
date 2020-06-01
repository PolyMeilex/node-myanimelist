/** src: https://github.com/jikan-me/jikan/blob/master/src/Model/Anime/AnimeVideos.php */
export default interface AnimeVideos {
    promo: PromoListItem[];
    episodes: StreamEpisodeListItem[];
    request_cache_expiry: number;
    request_cached: boolean;
    request_hash: string;
}
/** src: https://github.com/jikan-me/jikan/blob/master/src/Model/Anime/StreamEpisodeListItem.php */
interface StreamEpisodeListItem {
    title: string;
    episode: string;
    url: string;
    image_url: string;
}
/** src: https://github.com/jikan-me/jikan/blob/master/src/Model/Anime/PromoListItem.php */
interface PromoListItem {
    title: string;
    image_url: string;
    video_url: string;
}
export {};
