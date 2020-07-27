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
    const config: AxiosRequestConfig = {
      url: [apiUrl, "users", "@me"].join("/"),
      headers: {
        Authorization: `Bearer ${this.acount.malToken["access_token"]}`,
      },
      params: {},
    };

    if (fields) config.params.fields = fields.toString();

    return new MalRequest<any>(config);
  }

  animelist<T, S>(
    name: string = "@me",
    fields?: AnimeFields<T>,
    listStatusFields?: AnimeListStatusFields<S>,
    args?: { status?: string; sort?: string; limit?: number; offset?: number }
  ): MalRequest<Paging<AnimeListItem<WorkBase & T, AnimeListStatusBase & S>>> {
    const config: AxiosRequestConfig = {
      url: [apiUrl, "users", name, "animelist"].join("/"),
      headers: {
        Authorization: `Bearer ${this.acount.malToken["access_token"]}`,
      },
      params: {
        fields: "",
      },
    };

    if (fields) config.params.fields += fields.toString();

    if (listStatusFields) {
      config.params.fields += `list_status{${listStatusFields.toString()}}`;
    } else {
      config.params.fields += "list_status";
    }

    if (args) {
      if (args.status) config.params.status = args.status;
      if (args.sort) config.params.sort = args.sort;
      if (args.limit) config.params.limit = args.limit;
      if (args.offset) config.params.offset = args.offset;
    }

    return new MalRequest<any>(config);
  }

  mangalist<T, S>(
    name: string = "@me",
    fields?: MangaFields<T>,
    listStatusFields?: MangaListStatusFields<S>,
    args?: { status?: string; sort?: string; limit?: number; offset?: number }
  ): MalRequest<Paging<MangaListItem<WorkBase & T, MangaListStatusBase & S>>> {
    const config: AxiosRequestConfig = {
      url: [apiUrl, "users", name, "mangalist"].join("/"),
      headers: {
        Authorization: `Bearer ${this.acount.malToken["access_token"]}`,
      },
      params: {
        fields: "",
      },
    };

    if (fields) config.params.fields += fields.toString();

    if (listStatusFields) {
      config.params.fields += `list_status{${listStatusFields.toString()}}`;
    } else {
      config.params.fields += "list_status";
    }

    if (args) {
      if (args.status) config.params.status = args.status;
      if (args.sort) config.params.sort = args.sort;
      if (args.limit) config.params.limit = args.limit;
      if (args.offset) config.params.offset = args.offset;
    }

    return new MalRequest<any>(config);
  }
}
