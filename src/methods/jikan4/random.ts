import { jikanGet, jikanUrl } from "./index";
import urljoin from "url-join";
import * as Types from "./types";

export function randomAnime(): Promise<{ data: Types.Anime }> {
  return jikanGet(urljoin(jikanUrl, "random", "anime"));
}

export function randomManga(): Promise<{ data: Types.Manga }> {
  return jikanGet(urljoin(jikanUrl, "random", "manga"));
}

export function randomCharacters(): Promise<{ data: Types.Character }> {
  return jikanGet(urljoin(jikanUrl, "random", "characters"));
}

export function randomPerson(): Promise<{ data: Types.Person }> {
  return jikanGet(urljoin(jikanUrl, "random", "people"));
}

export function randomUser(): Promise<{ data: Types.UserProfile }> {
  return jikanGet(urljoin(jikanUrl, "random", "user"));
}
