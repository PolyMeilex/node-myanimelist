import Picture from "../common/picture";

/** src: ? */
export default interface Pictures {
  pictures: Picture[];

  request_cache_expiry: number;
  request_cached: boolean;
  request_hash: string;
}
