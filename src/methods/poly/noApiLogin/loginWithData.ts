import axios, { AxiosRequestConfig } from "axios";
// const qs = require("querystring");
const qs = obj =>
  Object.keys(obj)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]))
    .join("&");

module.exports = (login: string, password: string, startData: any) => {
  var options: AxiosRequestConfig = {
    method: "post",
    url: "https://myanimelist.net/login.php",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Cache-Control": "no-cache",
      cookie: `MALSESSIONID=${startData.MALSESSIONID}; MALHLOGSESSID=${startData.MALHLOGSESSID}; is_logged_in=1; m_gdpr_mdl=1`
    },
    data: qs({
      user_name: login,
      password: password,
      cookie: "1",
      submit: "1",
      csrf_token: startData.csrf_token
    }),
    maxRedirects: 0,
    validateStatus: function(status) {
      return (status >= 200 && status < 300) || status == 302;
    }
  };

  const parseResponse = res => {
    let cookies = res.headers["set-cookie"];

    cookies = cookies.map(cookie => cookie.split(";")[0]);

    cookies = cookies.map(cookie => {
      cookie = cookie.split("=");
      return { name: cookie[0], value: cookie[1] };
    });

    const MALSESSIONID = cookies.find(cookie => cookie.name == "MALSESSIONID")
      .value;

    let out = {
      MALSESSIONID: MALSESSIONID,
      csrf_token: startData.csrf_token
    };

    return out;
  };

  return new Promise((EndRes, rej) => {
    axios(options)
      .then(res => {
        EndRes(parseResponse(res));
      })
      .catch(err => rej("Can Not Login!: " + err));
  });
};
