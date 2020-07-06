import urljoin from "url-join";
import axios, { AxiosRequestConfig } from "axios";
import { apiUrl } from "../mobileApis";

type fields = "anime_statistics" | "is_supporter";

/**
 * ### Profile of logged in user
 * @param auth Auth OBJ.
 * @param fields array [anime_statistics,is_supporter]
 */
export function profile(auth: any, fields: fields[] = ["anime_statistics"]) {
  const user = "@me"; // Other users don't work with profile endpoint

  const request: AxiosRequestConfig = {
    method: "get",
    url: urljoin(apiUrl, "users", user, `?fields=${fields.join(",")}`),
    headers: { Authorization: `Bearer ${auth["access_token"]}` },
  };

  return new Promise((res, rej) => {
    axios(request)
      .then((r) => res(r.data))
      .catch((err) => rej(err));
  });
}

export default profile;
