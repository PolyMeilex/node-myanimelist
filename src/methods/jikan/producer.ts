import * as urljoin from "url-join";
import * as rp from "request-promise-native";
import baseUrl from "./jikanApi";

/**
 * ### Anime by this Producer/Studio/Licensor
 * @param producer_id Producer ID from MyAnimeList.
 * @param page Page.
 */
export default function(producer_id: number, page: number | string = "") {
  const link = urljoin(baseUrl, "producer", String(producer_id), String(page));

  return new Promise((res, rej) => {
    rp(link)
      .then(res => JSON.parse(res))
      .then(json => res(json))
      .catch(err => rej(`Error: ${err}`));
  });
}
