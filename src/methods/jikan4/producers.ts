import { jikanGet, jikanUrl } from "./index";
import urljoin from "url-join";
import * as Types from "./types";

export function producers(): Promise<Types.Producers> {
  return jikanGet(urljoin(jikanUrl, "producers"));
}
