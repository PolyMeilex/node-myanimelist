import { MalAcount } from "..";
import { MalRequest } from "../request";
import { apiUrl } from "../api";

import { AnimeFields, AnimeDetailsFields, animeFields } from "./fields";
import { AnimeItem } from "./types";
import { Paging } from "../schemas/common";

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
  ): MalRequest<Paging<AnimeItem<T>>> {
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

  details<T>(id: number, fields?: AnimeDetailsFields<T>) {
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
}
