import { MalAcount } from "..";
import { MalRequest } from "../request";
import { apiUrl } from "../api";

import { MangaFields, MangaDetailsFields } from "./fields";
import { MangaItem, UpdateMangaParams, MangaListStatusBase } from "./types";
import { WorkBase, Paging, RankingItem } from "../common";
import { queryEncode } from "../util";
import { AxiosRequestConfig } from "axios";

export * from "./fields";
export * from "./types";

export class MalManga {
  private acount: MalAcount;

  constructor(acount: MalAcount) {
    this.acount = acount;
  }

  search<T>(
    q: string,
    fields?: MangaFields<T> | null,
    limit?: number | null,
    offset?: number | null,
    nsfw?: boolean | null
  ): MalRequest<Paging<MangaItem<WorkBase & T>>> {
    const config: AxiosRequestConfig = {
      url: [apiUrl, "manga"].join("/"),
      headers: this.acount.getHttpHeaders(),
      params: {
        q,
      },
    };

    if (fields != null) config.params.fields = fields.toString();
    if (limit != null) config.params.limit = limit;
    if (offset != null) config.params.offset = offset;
    if (nsfw != null) config.params.nsfw = nsfw;

    return new MalRequest<any>(config);
  }

  details<T>(id: number, fields?: MangaDetailsFields<WorkBase & T>) {
    const config: AxiosRequestConfig = {
      url: [apiUrl, "manga", id.toString()].join("/"),
      headers: this.acount.getHttpHeaders(),
      params: {},
    };

    if (fields) config.params.fields = fields.toString();

    return new MalRequest<any>(config);
  }

  /**
   * | value | |
   * | ---- | ---- |
   * | all | Top Anime Series |
   * | airing | Top Airing Anime |
   * | upcoming | Top Upcoming Anime |
   * | tv | Top Anime TV Series |
   * | ova | Top Anime OVA Series |
   * | movie | Top Anime Movies |
   * | special | Top Anime Specials |
   * | bypopularity | Top Anime by Popularity |
   * | favorite | Top Favorited Anime |
   */
  ranking<T>(
    rankingType:
      | "all"
      | "airing"
      | "upcoming"
      | "tv"
      | "ova"
      | "movie"
      | "special"
      | "bypopularity"
      | "favorite",
    fields?: MangaFields<T> | null,
    limit?: number | null,
    offset?: number | null
  ): MalRequest<Paging<RankingItem & MangaItem<WorkBase & T>>> {
    const config: AxiosRequestConfig = {
      url: [apiUrl, "manga", "ranking"].join("/"),
      headers: this.acount.getHttpHeaders(),
      params: {
        ranking_type: rankingType,
      },
    };

    if (fields != null) config.params.fields = fields.toString();
    if (limit != null) config.params.limit = limit;
    if (offset != null) config.params.offset = offset;

    return new MalRequest<any>(config);
  }

  updateMyManga(
    id: number,
    params?: UpdateMangaParams
  ): MalRequest<MangaListStatusBase> {
    const config: AxiosRequestConfig = {
      method: "PATCH",
      url: [apiUrl, "manga", id.toString(), "my_list_status"].join("/"),
      headers: {
        ...this.acount.getHttpHeaders(),
        "content-type": "application/x-www-form-urlencoded",
      },
      params: {},
      data: queryEncode(params),
    };

    return new MalRequest<any>(config);
  }

  deleteMyManga(id: number): MalRequest<any[]> {
    const config: AxiosRequestConfig = {
      method: "DELETE",
      url: [apiUrl, "manga", id.toString(), "my_list_status"].join("/"),
      headers: this.acount.getHttpHeaders(),
    };

    return new MalRequest<any[]>(config);
  }
}
