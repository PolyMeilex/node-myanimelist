import { MalAcount } from "..";
import { MalRequest } from "../request";
import { apiUrl } from "../api";

import { AnimeFields, AnimeDetailsFields, animeFields } from "./fields";
import { AnimeItem } from "./types";
import { Paging, RankingItem } from "../schemas/common";
import { WorkBase } from "../schemas/work";

export * from "./fields";

export class MalAnime {
  acount: MalAcount;

  constructor(acount: MalAcount) {
    this.acount = acount;
  }

  search<T>(
    q: string,
    fields?: AnimeFields<T>,
    limit: number = 100,
    offset: number = 0
  ): MalRequest<Paging<AnimeItem<WorkBase & T>>> {
    let fieldsStr;

    if (fields) {
      fieldsStr = Object.keys(fields.fields).join(",");
    } else {
      fieldsStr = "";
    }

    let quary = `?q=${q}`;

    if (fieldsStr.length > 0) quary += `&fields=${fieldsStr}`;
    if (limit != 100) quary += `&limit=${limit}`;
    if (offset != 0) quary += `&offset=${offset}`;

    return new MalRequest<any>([apiUrl, "anime", quary], this.acount.malToken);
  }

  details<T>(id: number, fields?: AnimeDetailsFields<WorkBase & T>) {
    let fieldsStr;

    if (fields) {
      fieldsStr = Object.keys(fields.fields).join(",");
    } else {
      fieldsStr = "";
    }

    let quary = "";
    if (fieldsStr.length > 0) quary = "?fields=" + fieldsStr;

    return new MalRequest<T>(
      [apiUrl, "anime", id.toString(), quary],
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
    fields?: AnimeFields<T>,
    limit: number = 100,
    offset: number = 0
  ): MalRequest<Paging<RankingItem & AnimeItem<WorkBase & T>>> {
    let fieldsStr;

    if (fields) {
      fieldsStr = Object.keys(fields.fields).join(",");
    } else {
      fieldsStr = "";
    }

    let quary = `?ranking_type=${rankingType}`;

    if (fieldsStr.length > 0) quary += `&fields=${fieldsStr}`;
    if (limit != 100) quary += `&limit=${limit}`;
    if (offset != 0) quary += `&offset=${offset}`;

    return new MalRequest<any>(
      [apiUrl, "anime", "ranking", quary],
      this.acount.malToken
    );
  }

  seasonal<T>(
    year: number,
    season: string,
    fields?: AnimeFields<T>,
    sort?: "anime_score" | "anime_num_list_users",
    limit: number = 100,
    offset: number = 0
  ): MalRequest<Paging<AnimeItem<WorkBase & T>>> {
    let fieldsStr;

    if (fields) {
      fieldsStr = Object.keys(fields.fields).join(",");
    } else {
      fieldsStr = "";
    }

    let quary = `?`;

    if (fieldsStr.length > 0) quary += `&fields=${fieldsStr}`;
    if (sort) quary += `&sort=${sort}`;
    if (limit != 100) quary += `&limit=${limit}`;
    if (offset != 0) quary += `&offset=${offset}`;

    return new MalRequest<any>(
      [apiUrl, "anime", "season", year.toString(), season, quary],
      this.acount.malToken
    );
  }

  suggested<T>(
    fields?: AnimeFields<T>,
    limit: number = 100,
    offset: number = 0
  ): MalRequest<Paging<AnimeItem<WorkBase & T>>> {
    let fieldsStr;

    if (fields) {
      fieldsStr = Object.keys(fields.fields).join(",");
    } else {
      fieldsStr = "";
    }

    let quary = `?`;

    if (fieldsStr.length > 0) quary += `&fields=${fieldsStr}`;
    if (limit != 100) quary += `&limit=${limit}`;
    if (offset != 0) quary += `&offset=${offset}`;

    return new MalRequest<any>(
      [apiUrl, "anime", "suggestions", quary],
      this.acount.malToken
    );
  }
}
