import * as rp from "request-promise-native";
import { baseURL } from "../mobileApis";

export default function(
  username: string,
  password: string,
  grant_type: string = "password",
  client_id: string = "6114d00ca681b7701d1e15fe11a4987e"
) {
  const request = {
    method: "POST",
    url: baseURL + "/auth/token",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    form: {
      client_id,
      username,
      password,
      grant_type
    }
  };

  return new Promise((res, rej) => {
    rp(request)
      .then(body => JSON.parse(body))
      .then(json => res(json))
      .catch(err => rej(err));
  });
}
