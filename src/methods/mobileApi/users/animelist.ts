import * as urljoin from "url-join";
import * as rp from "request-promise-native";
import { baseURL } from "../mobileApis";

type fields =
  | "alternative_titles"
  | "media_type"
  | "num_episodes"
  | "status"
  | "start_date"
  | "end_date"
  | "average_episode_duration"
  | "synopsis"
  | "mean"
  | "rank"
  | "popularity"
  | "num_list_users"
  | "num_favorites"
  | "num_scoring_users"
  | "start_season"
  | "broadcast"
  | "nsfw"
  | "created_at"
  | "updated_at"
  | "my_list_status{start_date,finish_date}";
/**
 * ### Animelist of any user
 * @param auth Auth OBJ.
 * @param user Mal username or 'me' param. @me to get logged in user
 * @param fields array [alternative_titles,media_type,num_episodes,status,start_date,end_date,average_episode_duration,synopsis,mean,rank,popularity,num_list_users,num_favorites,num_scoring_users,start_season,broadcast,my_list_status{start_date,finish_date},nsfw,created_at,updated_at]
 */
export default function(
  auth: any,
  user: "@me" | string = "@me",
  fields: fields[] = []
) {
  const request = {
    method: "GET",
    url: urljoin(
      baseURL,
      "users",
      user,
      "animelist",
      `?fields=${fields.join(",")}`
    ),
    headers: { Authorization: `Bearer ${auth["access_token"]}` }
  };

  return new Promise((res, rej) => {
    rp(request)
      .then(body => JSON.parse(body))
      .then(json => res(json))
      .catch(err => rej(err));
  });
}
