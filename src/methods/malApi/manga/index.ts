import { MalAcount } from "..";
import { MalRequest } from "../request";
import { apiUrl } from "../api";

import { MangaFields, MangaDetailsFields } from "./fields";
import { MangaItem, UpdateMangaParams, MangaListStatusBase } from "./types";
import { WorkBase, Paging, RankingItem } from "../common";
import { queryEncode } from "../util";

export * from "./fields";
export * from "./types";

export class MalManga {
  acount: MalAcount;

  constructor(acount: MalAcount) {
    this.acount = acount;
  }

  search<T>(
    q: string,
    fields?: MangaFields<T>,

    /**
     * The maximum value is 100.
     */
    limit: number = 100,
    offset: number = 0
  ): MalRequest<Paging<MangaItem<WorkBase & T>>> {
    let fieldsStr;

    if (fields) {
      fieldsStr = fields.toString();
    } else {
      fieldsStr = "";
    }

    let quary = `?q=${q}`;

    if (fieldsStr.length > 0) quary += `&fields=${fieldsStr}`;
    if (limit != 100) quary += `&limit=${limit}`;
    if (offset != 0) quary += `&offset=${offset}`;

    return new MalRequest<any>([apiUrl, "manga", quary], this.acount.malToken);
  }

  details<T>(id: number, fields?: MangaDetailsFields<WorkBase & T>) {
    let fieldsStr;

    if (fields) {
      fieldsStr = fields.toString();
    } else {
      fieldsStr = "";
    }

    let quary = "";
    if (fieldsStr.length > 0) quary = "?fields=" + fieldsStr;

    return new MalRequest<T>(
      [apiUrl, "manga", id.toString(), quary],
      this.acount.malToken
    );
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
    fields?: MangaFields<T>,
    limit: number = 100,
    offset: number = 0
  ): MalRequest<Paging<RankingItem & MangaItem<WorkBase & T>>> {
    let fieldsStr;

    if (fields) {
      fieldsStr = fields.toString();
    } else {
      fieldsStr = "";
    }

    let quary = `?ranking_type=${rankingType}`;

    if (fieldsStr.length > 0) quary += `&fields=${fieldsStr}`;
    if (limit != 100) quary += `&limit=${limit}`;
    if (offset != 0) quary += `&offset=${offset}`;

    return new MalRequest<any>(
      [apiUrl, "manga", "ranking", quary],
      this.acount.malToken
    );
  }

  updateMyManga(
    id: number,
    params?: UpdateMangaParams
  ): MalRequest<MangaListStatusBase> {
    if (!params) params = {};

    const req = new MalRequest<MangaListStatusBase>(
      [apiUrl, "manga", id.toString(), "my_list_status"],
      this.acount.malToken
    );
    req.method = "patch";
    req.headers = { "content-type": "application/x-www-form-urlencoded" };
    req.data = queryEncode(params);

    return req;
  }

  deleteMyManga(id: number): MalRequest<any[]> {
    const req = new MalRequest<any[]>(
      [apiUrl, "manga", id.toString(), "my_list_status"],
      this.acount.malToken
    );
    req.method = "delete";

    return req;
  }
}
