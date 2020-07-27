import { MalAcount } from "..";
import { MalRequest } from "../request";
import { apiUrl } from "../api";

import { ForumCategory, ForumTopicData, ForumTopicsData } from "./types";
import { queryEncode } from "../util";
import { Paging } from "../common";
import { AxiosRequestConfig } from "axios";

export * from "./types";

export class MalForum {
  private acount: MalAcount;

  constructor(acount: MalAcount) {
    this.acount = acount;
  }

  boards(): MalRequest<{ categories: ForumCategory }> {
    const config: AxiosRequestConfig = {
      url: [apiUrl, "forum", "boards"].join("/"),
      headers: {
        Authorization: `Bearer ${this.acount.malToken["access_token"]}`,
      },
    };

    return new MalRequest<any>(config);
  }

  details(
    topic_id: number,
    limit?: number | null,
    offset?: number | null
  ): MalRequest<Paging<ForumTopicData>> {
    const config: AxiosRequestConfig = {
      url: [apiUrl, "forum", "topic", topic_id.toString()].join("/"),
      headers: {
        Authorization: `Bearer ${this.acount.malToken["access_token"]}`,
      },
      params: {},
    };

    if (limit != null) config.params.limit = limit;
    if (offset != null) config.params.offset = offset;

    return new MalRequest<any>(config);
  }

  topics(params: {
    board_id?: number;
    subboard_id?: number;
    limit?: number;
    offset?: number;
    sort?: string;
    q?: string;
    topic_user_name?: string;
    user_name?: string;
  }): MalRequest<Paging<ForumTopicsData>> {
    const config: AxiosRequestConfig = {
      url: [apiUrl, "forum", "topics"].join("/"),
      headers: {
        Authorization: `Bearer ${this.acount.malToken["access_token"]}`,
      },
      params: params,
    };

    return new MalRequest<any>(config);
  }
}
