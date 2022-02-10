import axios, { AxiosRequestConfig } from "axios";

const qs = (obj: any) =>
  Object.keys(obj)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]))
    .join("&");

export default async function (
  login: string,
  password: string,
  startData: any
) {
  const options: AxiosRequestConfig = {
    method: "post",
    url: "https://myanimelist.net/login.php",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Cache-Control": "no-cache",
      cookie: `MALSESSIONID=${startData.MALSESSIONID}; MALHLOGSESSID=${startData.MALHLOGSESSID}; is_logged_in=1; m_gdpr_mdl=1`,
    },
    data: qs({
      user_name: login,
      password: password,
      cookie: "1",
      submit: "1",
      csrf_token: startData.csrf_token,
    }),
    maxRedirects: 0,
    validateStatus: (status) =>
      (status >= 200 && status < 300) || status == 302,
  };

  let res = await axios(options);

  let cookiesHeader = res.headers["set-cookie"];

  let cookiesValues = cookiesHeader?.map((cookie: any) => cookie.split(";")[0]);

  let cookies = cookiesValues?.map((cookie: any) => {
    cookie = cookie.split("=");
    return { name: cookie[0], value: cookie[1] };
  });

  const MALSESSIONID = cookies?.find(
    (cookie: any) => cookie.name == "MALSESSIONID"
  )?.value;

  return {
    MALSESSIONID: MALSESSIONID,
    csrf_token: startData.csrf_token,
  };
}
