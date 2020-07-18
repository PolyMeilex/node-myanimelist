import { MalAcount } from "..";
import { MalRequest } from "../request";
import { apiUrl } from "../api";

import { ForumCategory, ForumTopicData, ForumTopicsData } from "./types";
import { queryEncode } from "../util";
import { Paging } from "../common";

export * from "./types";

export class MalForum {
  acount: MalAcount;

  constructor(acount: MalAcount) {
    this.acount = acount;
  }

  boards(): MalRequest<{ categories: ForumCategory }> {
    return new MalRequest<any>(
      [apiUrl, "forum", "boards"],
      this.acount.malToken
    );
  }

  details(
    topic_id: number,
    limit: number = 100,
    offset: number = 0
  ): MalRequest<Paging<ForumTopicData>> {
    let params = [];
    if (limit != 100) params.push(`limit=${limit}`);
    if (offset != 0) params.push(`offset=${offset}`);

    let quary = "";

    if (params.length > 0) {
      quary += `?`;
      quary += params.join("&");
    }

    return new MalRequest<any>(
      [apiUrl, "forum", "topic", topic_id.toString(), quary],
      this.acount.malToken
    );
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
    let quary = "?";
    quary += queryEncode(params);

    return new MalRequest<any>(
      [apiUrl, "forum", "topics", quary],
      this.acount.malToken
    );
  }
}
