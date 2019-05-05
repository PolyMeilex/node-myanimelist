import * as urljoin from "url-join";
import * as rp from "request-promise-native";
import baseUrl from "./jikanApi";

type season = "summer" | "spring" | "fall" | "winter";

/**
 * ### Anime of the specified season
 * @param year Year.
 * @param season summer,spring,fall,winter.
 */
export default function(year: number, season: season) {
  let link = urljoin(baseUrl, "season", String(year), String(season));

  return new Promise((res, rej) => {
    rp(link)
      .then(res => JSON.parse(res))
      .then(json => res(json))
      .catch(err => rej(`Error: ${err}`));
  });
}
