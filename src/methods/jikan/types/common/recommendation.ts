/** src: https://github.com/jikan-me/jikan/blob/master/src/Model/Common/Recommendation.php */
export interface Recommendation {
  mal_id: number;
  url: string;
  image_url: string;
  recommendation_url: string;
  title: string;
  recommendation_count: number;
}
