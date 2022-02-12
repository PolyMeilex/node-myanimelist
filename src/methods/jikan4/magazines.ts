import { jikanGet, jikanUrl } from "./index";
import urljoin from "url-join";
import * as Types from "./types";

export function magazines(): Promise<Types.Magazines> {
  return jikanGet(urljoin(jikanUrl, "magazines"));
}
