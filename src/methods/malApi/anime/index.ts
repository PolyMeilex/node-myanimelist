import { MalAcount } from "..";
import { MalRequest } from "../request";
import { apiUrl } from "../api";

import { AnimeFields, AnimeSearchItem } from "./fields";
import { Paging } from "../schemas/common";

export * from "./fields";

export class MalAnime {
  acount: MalAcount;

  constructor(acount: MalAcount) {
    this.acount = acount;
  }

  search<T>(
    q: string,
    fields: AnimeFields<T>
  ): MalRequest<Paging<AnimeSearchItem<T>>> {
    let quary = Object.keys(fields.fields).join(",");

    if (quary.length > 0) {
      quary = "?fields=" + quary + "&q=" + q;
    } else {
      quary = "?q=" + q;
    }

    return new MalRequest<any>([apiUrl, "anime", quary], this.acount.malToken);
  }

  // TODO:
  details<T>(id: number, fields: AnimeFields<T>) {
    let quary = Object.keys(fields.fields).join(",");

    if (quary.length > 0) {
      quary = "?fields=" + quary;
    }

    return new MalRequest<T>(
      [apiUrl, "anime", id.toString(), quary],
      this.acount.malToken
    );
  }
}
