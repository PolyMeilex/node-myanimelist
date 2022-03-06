import { jikanGet, jikanUrl, queryJoin } from "./index";
import urljoin from "url-join";
import * as Types from "./types";

/** @category Season*/
export function season(
  year: number,
  season: "spring" | "summer" | "fall" | "winter",
  params?: {
    page?: number;
    limit?: number;
  }
): Promise<{ data: Types.Anime[] } & Types.Pagination> {
  const url =
    urljoin(jikanUrl, "seasons", year.toString(), season) +
    queryJoin({ ...params });
  return jikanGet(url);
}

/** @category Season*/
export function seasonNow(params?: {
  page?: number;
  limit?: number;
}): Promise<{ data: Types.Anime[] } & Types.Pagination> {
  const url = urljoin(jikanUrl, "seasons", "now") + queryJoin({ ...params });
  return jikanGet(url);
}

/** @category Season*/
export function seasonsList(): Promise<Types.Seasons> {
  const url = urljoin(jikanUrl, "seasons");
  return jikanGet(url);
}

/** @category Season*/
export function seasonUpcoming(params?: {
  page?: number;
  limit?: number;
}): Promise<{ data: Types.Anime[] } & Types.Pagination> {
  const url =
    urljoin(jikanUrl, "seasons", "upcoming") + queryJoin({ ...params });
  return jikanGet(url);
}
