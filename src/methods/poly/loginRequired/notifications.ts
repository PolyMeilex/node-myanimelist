import { LoginData } from "../noApiLogin";
import axios, { AxiosRequestConfig } from "axios";

const qs = (obj: any) =>
  Object.keys(obj)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]))
    .join("&");

export default function (log: LoginData) {
  var options: AxiosRequestConfig = {
    method: "post",
    url: "https://myanimelist.net/notification/api/request-items.json",
    headers: {
      "Cache-Control": "no-cache",
      "Content-Type": "application/x-www-form-urlencoded",
      cookie: `MALSESSIONID=${log.MALSESSIONID}; is_logged_in=1;`,
    },
    data: qs({ csrf_token: log.csrf_token }),
  };

  return new Promise((res, rej) => {
    axios(options)
      .then((r) => res(r.data))
      .catch((err) => rej("Notyfications Not Found: " + err));
  });
}
