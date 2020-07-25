import { MalAcount } from "..";
import MalRequest from "../request";

import { apiUrl } from "../api";
import { AnimeField } from "../types";
import { AnimeFields, AnimeListStatusFields } from "../anime";
import { Paging, WorkBase } from "../common";
import { UserFields } from "./fields";
import { AnimeListStatusBase } from "../anime/types";
import {
  MangaFields,
  MangaListStatusBase,
  MangaListStatusFields,
} from "../manga";
import { UserBase, AnimeListItem, MangaListItem } from "./types";

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

  animelist<T, S>(
    name: string = "@me",
    fields?: AnimeFields<T>,
    listStatusFields?: AnimeListStatusFields<S>
  ): MalRequest<Paging<AnimeListItem<WorkBase & T, AnimeListStatusBase & S>>> {
    let fieldsStr;

    if (fields) {
      fieldsStr = fields.toString();
    } else {
      fieldsStr = "";
    }

    if (listStatusFields) {
      fieldsStr += `list_status{${listStatusFields.toString()}}`;
    } else {
      fieldsStr += "list_status";
    }

    let quary = "";
    if (fieldsStr.length > 0) quary = "?fields=" + fieldsStr;

    const req = new MalRequest<any>(
      [apiUrl, "users", name, "animelist", quary],
      this.acount.malToken
    );
    return req as any;
  }

  mangalist<T, S>(
    name: string = "@me",
    fields?: MangaFields<T>,
    listStatusFields?: MangaListStatusFields<S>
  ): MalRequest<Paging<MangaListItem<WorkBase & T, MangaListStatusBase & S>>> {
    let fieldsStr;

    if (fields) {
      fieldsStr = fields.toString();
    } else {
      fieldsStr = "";
    }

    if (listStatusFields) {
      fieldsStr += `list_status{${listStatusFields.toString()}}`;
    } else {
      fieldsStr += "list_status";
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
