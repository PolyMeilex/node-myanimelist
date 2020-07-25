export const jikanUrl = "https://api.jikan.moe/v3";

import axios from "axios";

// @ts-ignore
global.jikanGet = function jikanGet(url: string): Promise<any> {
  return new Promise((res, rej) => {
    axios
      .get(url)
      .then((r) => {
        const res = r.data;
        // Super stupid fix for backword compat
        res.data = res;
        res(res);
      })
      .catch((err) => rej(err));
  });
};

// export interface ReqResponse<T> {
//   data: T;
// }

export type Req<T> = Promise<T>;

export function jikanGet(url: string): Promise<any> {
  // @ts-ignore
  return global.jikanGet(url);
}
