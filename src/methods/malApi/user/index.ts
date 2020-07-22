import { MalAcount } from "..";
import MalRequest from "../request";

import { apiUrl } from "../api";
import { AnimeField } from "../types";
import { AnimeFields } from "../anime";
import { Paging, WorkBase } from "../common";
import { UserFields } from "./fields";
import { AnimeItem } from "../anime/types";
import { MangaFields, MangaItem } from "../manga";
import { UserBase } from "./types";

export * from "./fields";
export * from "./types";

export type AnimelistParams = {
  status?: string;
  sort?: string;
  limit?: number;
  offset?: number;
  fields?: AnimeField[];
};

export class MalUser {
  private acount: MalAcount;

  constructor(acount: MalAcount) {
    this.acount = acount;
  }

  info<T>(fields?: UserFields<T>): MalRequest<UserBase & T> {
    let fieldsStr;

    if (fields) {
      fieldsStr = Object.keys(fields.fields).join(",");
    } else {
      fieldsStr = "";
    }

    let quary = "";
    if (fieldsStr.length > 0) quary = "?fields=" + fieldsStr;

    return new MalRequest<any>(
      [apiUrl, "users", "@me", quary],
      this.acount.malToken
    );
  }

  animelist<T>(
    name: string = "@me",
    fields?: AnimeFields<T>
  ): MalRequest<Paging<AnimeItem<WorkBase & T>>> {
    let fieldsStr;

    if (fields) {
      fieldsStr = Object.entries(fields.fields)
        .map(([k, v]: [string, any]) => {
          if (typeof v === "boolean") {
            return k;
          } else if (typeof v === "string") {
            return `${k}{${v}}`;
          }
        })
        .join(",");
    } else {
      fieldsStr = "";
    }

    let quary = "";
    if (fieldsStr.length > 0) quary = "?fields=" + fieldsStr;

    const req = new MalRequest<any>(
      [apiUrl, "users", name, "animelist", quary],
      this.acount.malToken
    );
    return req as any;
  }

  mangalist<T>(
    name: string = "@me",
    fields?: MangaFields<T>
  ): MalRequest<Paging<MangaItem<WorkBase & T>>> {
    let fieldsStr;

    if (fields) {
      fieldsStr = Object.entries(fields.fields)
        .map(([k, v]: [string, any]) => {
          if (typeof v === "boolean") {
            return k;
          } else if (typeof v === "string") {
            return `${k}{${v}}`;
          }
        })
        .join(",");
    } else {
      fieldsStr = "";
    }

    let quary = "";
    if (fieldsStr.length > 0) quary = "?fields=" + fieldsStr;

    const req = new MalRequest<any>(
      [apiUrl, "users", name, "mangalist", quary],
      this.acount.malToken
    );
    return req;
  }
}
