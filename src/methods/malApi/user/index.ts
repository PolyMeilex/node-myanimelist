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
import { AxiosRequestConfig } from "axios";

export * from "./fields";
export * from "./types";

export class MalUser {
  private acount: MalAcount;

  constructor(acount: MalAcount) {
    this.acount = acount;
  }

  info<T>(fields?: UserFields<T>): MalRequest<UserBase & T> {
    const config: AxiosRequestConfig = {
      url: [apiUrl, "users", "@me"].join("/"),
      headers: this.acount.getHttpHeaders(),
      params: {},
    };

    if (fields) config.params.fields = fields.toString();

    return new MalRequest<any>(config);
  }

  animelist<T, S>(
    name: string = "@me",
    fields?: AnimeFields<T> | null,
    listStatusFields?: AnimeListStatusFields<S> | null,
    args?: { status?: string; sort?: string; limit?: number; offset?: number, includeNsfw?: boolean }
  ): MalRequest<Paging<AnimeListItem<WorkBase & T, AnimeListStatusBase & S>>> {
    const config: AxiosRequestConfig = {
      url: [apiUrl, "users", name, "animelist"].join("/"),
      headers: this.acount.getHttpHeaders(),
      params: {
        fields: "",
        nsfw: args?.includeNsfw ? "1" : "0",
      },
    };

    if (fields != null) config.params.fields += fields.toString();

    if (listStatusFields != null) {
      config.params.fields += `list_status{${listStatusFields.toString()}}`;
    } else {
      config.params.fields += "list_status";
    }

    if (args) {
      if (args.status != null) config.params.status = args.status;
      if (args.sort != null) config.params.sort = args.sort;
      if (args.limit != null) config.params.limit = args.limit;
      if (args.offset != null) config.params.offset = args.offset;
    }

    return new MalRequest<any>(config);
  }

  mangalist<T, S>(
    name: string = "@me",
    fields?: MangaFields<T> | null,
    listStatusFields?: MangaListStatusFields<S> | null,
    args?: { status?: string; sort?: string; limit?: number; offset?: number }
  ): MalRequest<Paging<MangaListItem<WorkBase & T, MangaListStatusBase & S>>> {
    const config: AxiosRequestConfig = {
      url: [apiUrl, "users", name, "mangalist"].join("/"),
      headers: this.acount.getHttpHeaders(),
      params: {
        fields: "",
      },
    };

    if (fields != null) config.params.fields += fields.toString();

    if (listStatusFields != null) {
      config.params.fields += `list_status{${listStatusFields.toString()}}`;
    } else {
      config.params.fields += "list_status";
    }

    if (args) {
      if (args.status != null) config.params.status = args.status;
      if (args.sort != null) config.params.sort = args.sort;
      if (args.limit != null) config.params.limit = args.limit;
      if (args.offset != null) config.params.offset = args.offset;
    }

    return new MalRequest<any>(config);
  }
}
