module.exports = (log: LoginData) => {
  const rp = require("request-promise-native");

  var options = {
    method: "POST",
    url: "https://myanimelist.net/notification/api/request-items.json",
    headers: {
      "Cache-Control": "no-cache",
      "Content-Type": "application/x-www-form-urlencoded",
      cookie: `MALSESSIONID=${log.MALSESSIONID}; is_logged_in=1;`
    },
    form: { csrf_token: log.csrf_token },
    json: true
  };

  return new Promise((res, rej) => {
    rp(options)
      .then(json => res(json))
      .catch(err => rej("Notyfications Not Found"));
  });
};

interface LoginData {
  MALSESSIONID: string;
  csrf_token: string;
}
