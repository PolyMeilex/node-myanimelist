import { jikanGet, jikanUrl, queryJoin } from "./index";
import urljoin from "url-join";
import * as Types from "./types";

/** @category Top*/
export function topAnime(params?: {
  page?: number;
  limit?: number;
}): Promise<{ data: Types.Anime[] } & Types.Pagination> {
  const url = urljoin(jikanUrl, "top", "anime") + queryJoin({ ...params });
  return jikanGet(url);
}

/** @category Top*/
export function topManga(params?: {
  page?: number;
  limit?: number;
}): Promise<{ data: Types.Manga[] } & Types.Pagination> {
  const url = urljoin(jikanUrl, "top", "manga") + queryJoin({ ...params });
  return jikanGet(url);
}

/** @category Top*/
export function topPeople(params?: {
  page?: number;
  limit?: number;
}): Promise<{ data: Types.Person[] } & Types.Pagination> {
  const url = urljoin(jikanUrl, "top", "people") + queryJoin({ ...params });
  return jikanGet(url);
}

/** @category Top*/
export function topCharacters(params?: {
  page?: number;
  limit?: number;
}): Promise<{ data: Types.Character[] } & Types.Pagination> {
  const url = urljoin(jikanUrl, "top", "characters") + queryJoin({ ...params });
  return jikanGet(url);
}

/** @category Top*/
export function topReviews(params?: {
  page?: number;
  limit?: number;
}): Promise<Types.ReviewsCollection & Types.Pagination> {
  const url = urljoin(jikanUrl, "top", "characters") + queryJoin({ ...params });
  return jikanGet(url);
}
