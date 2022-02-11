import { jikanGet, jikanUrl } from "./index";
import urljoin from "url-join";
import * as Types from "./types";

export function animeGenres(): Promise<Types.Genres> {
  return jikanGet(urljoin(jikanUrl, "genres", "anime"));
}

export function mangaGenres(): Promise<Types.Genres> {
  return jikanGet(urljoin(jikanUrl, "genres", "managa"));
}
