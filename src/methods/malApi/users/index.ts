import { MalAcount } from "..";
import MalRequest from "../request";

import { apiUrl } from "../mobileApis";
import { queryEncode } from "../util";
import { AnimeFields } from "../types";

export type AnimelistParams = {
  status?: string;
  sort?: string;
  limit?: number;
  offset?: number;
  fields?: AnimeFields[];
};

const defaultAnimelistParams: AnimelistParams = {
  fields: [
    "alternative_titles",
    "media_type",
    "num_episodes",
    "status",
    "start_date",
    "end_date",
    "average_episode_duration",
    "synopsis",
    "mean",
    "rank",
    "popularity",
    "num_list_users",
    "num_favorites",
    "num_scoring_users",
    "start_season",
    "broadcast",
    "my_list_status{start_date,finish_date}",
    "nsfw",
    "created_at",
    "updated_at",
  ],
};

export class MalUser {
  acount: MalAcount;
  name: string;

  constructor(acount: MalAcount, name: string) {
    this.acount = acount;
    this.name = name;
  }

  info(
    fields: Array<"anime_statistics" | "is_supporter"> = [
      "anime_statistics",
      "is_supporter",
    ]
  ): MalRequest {
    let quary = fields.join(",");

    if (quary.length > 0) {
      quary = "?fields=" + quary;
    }

    const req = new MalRequest(
      [apiUrl, "users", this.name, quary],
      this.acount.malToken
    );
    return req;
  }

  animelist(params: AnimelistParams = defaultAnimelistParams): MalRequest {
    if (params.fields) {
      params.fields = [params.fields.join(",")];
    }

    let quary = queryEncode(params);
    if (quary.length > 0) {
      quary = "?" + quary;
    }

    const req = new MalRequest(
      [apiUrl, "users", this.name, "animelist", quary],
      this.acount.malToken
    );
    return req;
  }

  // device_tokens(device_token,device_type){}
}
