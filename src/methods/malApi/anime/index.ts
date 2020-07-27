import { MalAcount } from "..";
import { MalRequest } from "../request";
import { apiUrl } from "../api";

import { AnimeFields, AnimeDetailsFields } from "./fields";
import { AnimeItem, UpdateAnimeParams, AnimeListStatusBase } from "./types";
import { WorkBase, Paging, RankingItem } from "../common";
import { queryEncode } from "../util";
import axios, { AxiosRequestConfig } from "axios";

export * from "./fields";
export * from "./types";

export class MalAnime {
  private acount: MalAcount;

  constructor(acount: MalAcount) {
    this.acount = acount;
  }

  search<T>(
    q: string,
    fields?: AnimeFields<T>,
    limit: number = 100,
    offset: number = 0
  ): MalRequest<Paging<AnimeItem<WorkBase & T>>> {
    const config: AxiosRequestConfig = {
      url: [apiUrl, "anime"].join("/"),
      headers: {
        Authorization: `Bearer ${this.acount.malToken["access_token"]}`,
      },
      params: {
        q,
      },
    };

    if (fields) config.params.fields = fields.toString();
    if (limit != 100) config.params.limit = limit;
    if (offset != 0) config.params.offset = offset;

    return new MalRequest<any>(config);
  }

  details<T>(id: number, fields?: AnimeDetailsFields<WorkBase & T>) {
    const config: AxiosRequestConfig = {
      url: [apiUrl, "anime", id.toString()].join("/"),
      headers: {
        Authorization: `Bearer ${this.acount.malToken["access_token"]}`,
      },
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
    fields?: AnimeFields<T>,
    limit: number = 100,
    offset: number = 0
  ): MalRequest<Paging<RankingItem & AnimeItem<WorkBase & T>>> {
    const config: AxiosRequestConfig = {
      url: [apiUrl, "anime", "ranking"].join("/"),
      headers: {
        Authorization: `Bearer ${this.acount.malToken["access_token"]}`,
      },
      params: {
        ranking_type: rankingType,
      },
    };

    if (fields) config.params.fields = fields.toString();
    if (limit != 100) config.params.limit = limit;
    if (offset != 0) config.params.offset = offset;

    return new MalRequest<any>(config);
  }

  seasonal<T>(
    year: number,
    season: string,
    fields?: AnimeFields<T>,
    sort?: "anime_score" | "anime_num_list_users",
    limit: number = 100,
    offset: number = 0
  ): MalRequest<Paging<AnimeItem<WorkBase & T>>> {
    const config: AxiosRequestConfig = {
      url: [apiUrl, "anime", "season", year.toString(), season].join("/"),
      headers: {
        Authorization: `Bearer ${this.acount.malToken["access_token"]}`,
      },
      params: {},
    };

    if (fields) config.params.fields = fields.toString();
    if (sort) config.params.sort = sort;
    if (limit != 100) config.params.limit = limit;
    if (offset != 0) config.params.offset = offset;

    return new MalRequest<any>(config);
  }

  suggested<T>(
    fields?: AnimeFields<T>,
    limit: number = 100,
    offset: number = 0
  ): MalRequest<Paging<AnimeItem<WorkBase & T>>> {
    const config: AxiosRequestConfig = {
      url: [apiUrl, "anime", "suggestions"].join("/"),
      headers: {
        Authorization: `Bearer ${this.acount.malToken["access_token"]}`,
      },
      params: {},
    };

    if (fields) config.params.fields = fields.toString();
    if (limit != 100) config.params.limit = limit;
    if (offset != 0) config.params.offset = offset;

    return new MalRequest<any>(config);
  }

  updateMyAnime(
    id: number,
    params: UpdateAnimeParams = {}
  ): MalRequest<AnimeListStatusBase> {
    const config: AxiosRequestConfig = {
      method: "PATCH",
      url: [apiUrl, "anime", id.toString(), "my_list_status"].join("/"),
      headers: {
        Authorization: `Bearer ${this.acount.malToken["access_token"]}`,
        "content-type": "application/x-www-form-urlencoded",
      },
      params: {},
      data: queryEncode(params),
    };

    return new MalRequest<any>(config);
  }

  deleteMyAnime(id: number): MalRequest<any[]> {
    const config: AxiosRequestConfig = {
      method: "DELETE",
      url: [apiUrl, "anime", id.toString(), "my_list_status"].join("/"),
      headers: {
        Authorization: `Bearer ${this.acount.malToken["access_token"]}`,
      },
    };

    return new MalRequest<any[]>(config);
  }
}
