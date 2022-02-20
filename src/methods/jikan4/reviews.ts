import { jikanGet, jikanUrl, queryJoin } from "./index";
import urljoin from "url-join";
import * as Types from "./types";

export function animeReviews(params?: {
  page?: number;
}): Promise<Types.AnimeReviews> {
  const url = urljoin(jikanUrl, "reviews", "anime") + queryJoin({ ...params });
  return jikanGet(url);
}

export function mangaReviews(params?: {
  page?: number;
}): Promise<Types.MangaReviews> {
  const url = urljoin(jikanUrl, "reviews", "manga") + queryJoin({ ...params });
  return jikanGet(url);
}
