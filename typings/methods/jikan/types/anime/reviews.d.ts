/** src: ? */
export default interface AnimeReviews {
    reviews: AnimeReview[];
    request_cache_expiry: number;
    request_cached: boolean;
    request_hash: string;
}
/** src: https://github.com/jikan-me/jikan/blob/master/src/Model/Anime/AnimeReview.php */
export interface AnimeReview {
    mal_id: number;
    url: string;
    /** Hymm what is this? Is this always a null???
     *
     *  Type definition in Jikan Models is wrong, so we look at parser anotations.
     *
     *  src: https://github.com/jikan-me/jikan/blob/80d4bb7994385d394e040ff6329a6c42fd34f679/src/Parser/Anime/AnimeReviewParser.php#L137
     */
    type: string | null;
    helpful_count: number;
    date: Date;
    reviewer: AnimeReviewer;
    content: string;
}
/**
 * src: https://github.com/jikan-me/jikan/blob/master/src/Model/Anime/AnimeReviewer.php
 * src: https://github.com/jikan-me/jikan/blob/master/src/Model/Common/Reviewer.php */
export interface AnimeReviewer {
    url: string;
    image_url: string;
    username: string;
    episodes_seen: number;
    scores: AnimeReviewScores;
}
/** src: https://github.com/jikan-me/jikan/blob/master/src/Model/Anime/AnimeReviewScores.php */
export interface AnimeReviewScores {
    overall: number;
    story: number;
    animation: number;
    sound: number;
    character: number;
    enjoyment: number;
}
