import { jikanGet, jikanUrl } from "./index";
import urljoin from "url-join";
import * as Types from "./types";

export function animeRecommendations(): Promise<{ data: Types.Anime }> {
  return jikanGet(urljoin(jikanUrl, "recommendations", "anime"));
}

export function mangaRecommendations(): Promise<{ data: Types.Manga }> {
  return jikanGet(urljoin(jikanUrl, "recommendations", "manga"));
}
