import { jikanGet, jikanUrl, queryJoin } from "./index";
import urljoin from "url-join";
import * as Types from "./types";

/** @category Schedules*/
export function schedules(params?: {
  page?: number;
  filter?:
    | "monday"
    | "tuesday"
    | "wednesday"
    | "thursday"
    | "friday"
    | "unknown"
    | "other";
}): Promise<Types.Schedules> {
  const url = urljoin(jikanUrl, "schedules") + queryJoin({ ...params });
  return jikanGet(url);
}
