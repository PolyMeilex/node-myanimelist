import { jikanGet, jikanUrl } from "./index";
import urljoin from "url-join";
import * as Types from "./types";

/** @category Genres*/
export function animeGenres(): Promise<Types.Genres> {
  return jikanGet(urljoin(jikanUrl, "genres", "anime"));
}

/** @category Genres*/
export function mangaGenres(): Promise<Types.Genres> {
  return jikanGet(urljoin(jikanUrl, "genres", "managa"));
}
