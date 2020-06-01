/** src: ? */
export default interface Reviews {
  reviews: AnimeReview[];

  request_cache_expiry: number;
  request_cached: boolean;
  request_hash: string;
}

/** src: https://github.com/jikan-me/jikan/blob/master/src/Model/Anime/AnimeReview.php */
interface AnimeReview {
  mal_id: number;
  url: string;

  /** Hymm what is this? Is this always a null??? */
  type?: any;

  helpful_count: number;
  date: Date;
  reviewer: AnimeReviewer;

  content: string;
}

/** 
 * src: https://github.com/jikan-me/jikan/blob/master/src/Model/Anime/AnimeReviewer.php  
 * src: https://github.com/jikan-me/jikan/blob/master/src/Model/Common/Reviewer.php */
interface AnimeReviewer {
  url: string;
  image_url: string;
  username: string;

  episodes_seen: number;
  scores: AnimeReviewScores;
}

/** src: https://github.com/jikan-me/jikan/blob/master/src/Model/Anime/AnimeReviewScores.php */
interface AnimeReviewScores {
  overall: number;
  story: number;
  animation: number;
  sound: number;
  character: number;
  enjoyment: number;
}