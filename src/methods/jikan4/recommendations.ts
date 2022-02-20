import { jikanGet, jikanUrl, queryJoin } from "./index";
import urljoin from "url-join";
import * as Types from "./types";

export function animeRecommendations(params?: {
  page?: number;
}): Promise<{ data: Types.Anime }> {
  const url =
    urljoin(jikanUrl, "recommendations", "anime") + queryJoin({ ...params });
  return jikanGet(url);
}

export function mangaRecommendations(params?: {
  page?: number;
}): Promise<{ data: Types.Manga }> {
  const url =
    urljoin(jikanUrl, "recommendations", "manga") + queryJoin({ ...params });
  return jikanGet(url);
}
