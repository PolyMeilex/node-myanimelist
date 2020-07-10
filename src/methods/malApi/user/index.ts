import { MalAcount } from "..";
import MalRequest from "../request";

import { apiUrl } from "../api";
import { AnimeField } from "../types";
import { AnimeFields, AnimeDetailsFields } from "../anime";
import { Paging } from "../schemas/common";
import { UserFields } from "./fields";
import { AnimeItem } from "../anime/types";

export * from "./fields";

export type AnimelistParams = {
  status?: string;
  sort?: string;
  limit?: number;
  offset?: number;
  fields?: AnimeField[];
};

export class MalUser {
  acount: MalAcount;
  name: string;

  constructor(acount: MalAcount, name: string) {
    this.acount = acount;
    this.name = name;
  }

  info<T>(fields?: UserFields<T>): MalRequest<T> {
    let fieldsStr;

    if (fields) {
      fieldsStr = Object.keys(fields.fields).join(",");
    } else {
      fieldsStr = "";
    }

    let quary = "";
    if (fieldsStr.length > 0) quary = "?fields=" + fieldsStr;

    return new MalRequest<T>(
      [apiUrl, "users", this.name, quary],
      this.acount.malToken
    );
  }

  animelist<T>(fields: AnimeFields<T>): MalRequest<Paging<AnimeItem<T>>> {
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
      [apiUrl, "users", this.name, "animelist", quary],
      this.acount.malToken
    );
    return req;
  }
}
