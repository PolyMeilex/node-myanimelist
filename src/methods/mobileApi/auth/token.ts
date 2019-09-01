import axios, { AxiosRequestConfig } from "axios";
import { baseURL } from "../mobileApis";

const qs = obj =>
  Object.keys(obj)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]))
    .join("&");

export default function(
  username: string,
  password: string,
  grant_type: string = "password",
  client_id: string = "6114d00ca681b7701d1e15fe11a4987e"
) {
  const request: AxiosRequestConfig = {
    method: "post",
    url: baseURL + "/auth/token",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    data: qs({
      client_id,
      username,
      password,
      grant_type
    })
  };

  return new Promise((res, rej) => {
    axios(request)
      .then(r => res(r.data))
      .catch(err => rej(err));
  });
}
