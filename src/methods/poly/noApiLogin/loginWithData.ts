import * as request from "request";

module.exports = (login: string, password: string, startData: any) => {
  var options = {
    method: "POST",
    url: "https://myanimelist.net/login.php",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Cache-Control": "no-cache",
      cookie: `MALSESSIONID=${startData.MALSESSIONID}; MALHLOGSESSID=${
        startData.MALHLOGSESSID
      }; is_logged_in=1; m_gdpr_mdl=1`
    },
    form: {
      user_name: login,
      password: password,
      cookie: "1",
      submit: "1",
      csrf_token: startData.csrf_token
    },
    followRedirect: false,
    resolveWithFullResponse: true
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
    request(options, (err, res) => {
      EndRes(parseResponse(res));
    });
  });
};
