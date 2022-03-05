import { jikanGet, jikanUrl, queryJoin } from "./index";
import urljoin from "url-join";
import * as Types from "./types";

export function watchRecentEpisodes(params?: {
  page?: number;
  limit?: number;
}): Promise<Types.WatchEpisodes> {
  const url = urljoin(jikanUrl, "watch", "episodes") + queryJoin({ ...params });
  return jikanGet(url);
}

export function watchPopularEpisodes(params?: {
  page?: number;
  limit?: number;
}): Promise<Types.WatchEpisodes> {
  const url =
    urljoin(jikanUrl, "watch", "episodes", "popular") +
    queryJoin({ ...params });
  return jikanGet(url);
}

export function watchRecentPromos(params?: {
  page?: number;
  limit?: number;
}): Promise<Types.WatchPromos> {
  const url = urljoin(jikanUrl, "watch", "promos") + queryJoin({ ...params });
  return jikanGet(url);
}

export function watchPopularPromos(params?: {
  page?: number;
  limit?: number;
}): Promise<Types.WatchPromos> {
  const url =
    urljoin(jikanUrl, "watch", "promos", "popular") + queryJoin({ ...params });
  return jikanGet(url);
}
