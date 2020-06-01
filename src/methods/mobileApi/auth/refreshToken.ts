import axios, { AxiosRequestConfig } from "axios";
import { secondaryApiUrl } from "../mobileApis";

const qs = (obj: any) =>
  Object.keys(obj)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]))
    .join("&");

export default function (
  refresh_token: string,
  grant_type: string = "refresh_token",
  client_id: string = "6114d00ca681b7701d1e15fe11a4987e"
) {
  const request: AxiosRequestConfig = {
    method: "post",
    url: secondaryApiUrl + "/oauth2/token",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    data: qs({
      client_id,
      refresh_token,
      grant_type,
    }),
  };

  return new Promise((res, rej) => {
    axios(request)
      .then((r) => res(r.data))
      .catch((err) => rej(err));
  });
}
