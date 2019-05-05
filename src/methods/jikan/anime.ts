import * as urljoin from "url-join";
import * as rp from "request-promise-native";
import baseUrl from "./jikanApi";

type request =
  | ""
  | "characters_staff"
  | "episodes"
  | "news"
  | "pictures"
  | "videos"
  | "stats"
  | "forum"
  | "moreinfo"
  | "reviews"
  | "recommendations"
  | "userupdates";

/**
 * ### A single anime object with all its details
 * @param id Id on MyAnimeList.
 * @param request Request types: 'characters_staff','episodes','news','pictures','videos','stats','forum','moreinfo','reviews','recommendations','userupdates'.
 * @param parameter Page number.
 */
export default function(
  id: number,
  request: request = "",
  parameter: number | string = ""
) {
  let link = urljoin(baseUrl, "anime", String(id), request, String(parameter));

  return new Promise((res, rej) => {
    rp(link)
      .then(res => JSON.parse(res))
      .then(json => res(json))
      .catch(err => rej(`Error: ${err}`));
  });
}
