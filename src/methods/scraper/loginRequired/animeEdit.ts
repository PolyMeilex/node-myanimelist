import { LoginData } from "../noApiLogin";
import axios, { AxiosRequestConfig } from "axios";

export function animeEdit(log: LoginData, sendJsonBody: any) {
  let jsonBody = sendJsonBody;
  jsonBody.csrf_token = log.csrf_token;

  let options: AxiosRequestConfig = {
    method: "post",
    url: "https://myanimelist.net/ownlist/anime/edit.json",
    headers: {
      "Cache-Control": "no-cache",
      "Content-Type": "application/json",
      cookie: `MALSESSIONID=${log.MALSESSIONID}; is_logged_in=1;`,
    },
    data: JSON.stringify(jsonBody),
  };

  return new Promise((res, rej) => {
    axios(options)
      .then((r) => {
        if (r.data == null) res(r.data);
        else rej(r.data);
      })
      .catch((err) => rej(`Error: ${err}`));
  });
}
