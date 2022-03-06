import { jikanGet, jikanUrl, queryJoin } from "./index";
import urljoin from "url-join";
import * as Types from "./types";

/** @category Reviews*/
export function animeReviews(params?: {
  page?: number;
}): Promise<Types.AnimeReviews> {
  const url = urljoin(jikanUrl, "reviews", "anime") + queryJoin({ ...params });
  return jikanGet(url);
}

/** @category Reviews*/
export function mangaReviews(params?: {
  page?: number;
}): Promise<Types.MangaReviews> {
  const url = urljoin(jikanUrl, "reviews", "manga") + queryJoin({ ...params });
  return jikanGet(url);
}
