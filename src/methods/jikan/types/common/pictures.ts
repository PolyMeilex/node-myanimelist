/** src: ? */
export default interface Pictures {
  pictures: Picture[];

  request_cache_expiry: number;
  request_cached: boolean;
  request_hash: string;
}

/** src: https://github.com/jikan-me/jikan/blob/master/src/Model/Common/Picture.php */
export interface Picture {
  large: string;
  small: string;
}
