/** src: ? */
export interface Pictures {
  pictures: Picture[];

  request_cache_expiry: number;
  request_cached: boolean;
  request_hash: string;
}
export default Pictures;

/** src: https://github.com/jikan-me/jikan/blob/master/src/Model/Common/Picture.php */
export interface Picture {
  large: string;
  small: string;
}
