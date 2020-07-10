import { MalAcount } from "..";
import MalRequest from "../request";

import { apiUrl } from "../api";
import { queryEncode } from "../util";
import { AnimeField } from "../types";
import { AnimeFields } from "../anime";
import { Paging } from "../schemas/common";

export type AnimelistParams = {
  status?: string;
  sort?: string;
  limit?: number;
  offset?: number;
  fields?: AnimeField[];
};

const defaultAnimelistFields: AnimeField[] = [
  "alternative_titles",
  "start_date",
  "end_date",

  "synopsis",
  "mean",
  "rank",

  "popularity",
  "num_list_users",
  "num_scoring_users",

  "media_type",
  "num_episodes",
  "nsfw",

  // genres
  "created_at",
  "updated_at",

  // media_type
  "status",
  "my_list_status{start_date,finish_date}",

  // num_episodes
  "start_season",
  "broadcast",

  // source
  "average_episode_duration",
  // rating

  // studios

  "num_favorites",
];

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
  ): MalRequest<any> {
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

  animelist<T>(fields: AnimeFields<T>): MalRequest<Paging<T>> {
    let quary = Object.keys(fields.fields).join(",");

    if (quary.length > 0) {
      quary = "?fields=" + quary;
    }

    // if (fields) {
    //   params.fields = [params.fields.join(",") as any];
    // } else {
    //   params.fields = [defaultAnimelistFields.join(",") as any];
    // }

    // let quary = queryEncode(params);
    // if (quary.length > 0) {
    //   quary = "?" + quary;
    // }

    const req = new MalRequest<any>(
      [apiUrl, "users", this.name, "animelist", quary],
      this.acount.malToken
    );
    return req;
  }

  // device_tokens(device_token,device_type){}
}
