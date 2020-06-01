export const jikanUrl = "https://api.jikan.moe/v3";

import axios from "axios";

// @ts-ignore
global.jikanGet = function jikanGet(url: string): Promise<any> {
  return axios.get(url);
};

export interface ReqResponse<T> {
  data: T;
}

export type Req<T> = Promise<ReqResponse<T>>;


export function jikanGet(url: string): Promise<any> {
  // @ts-ignore
  return global.jikanGet(url);
}
