module.exports = (sendJsonBody: any, log: LoginData) => {
  const rp = require("request-promise-native");

  let jsonBody = sendJsonBody;
  jsonBody.csrf_token = log.csrf_token;

  let options = {
    method: "POST",
    url: "https://myanimelist.net/ownlist/anime/edit.json",
    headers: {
      "Cache-Control": "no-cache",
      "Content-Type": "application/json",
      cookie: `MALSESSIONID=${log.MALSESSIONID}; is_logged_in=1;`
    },
    body: jsonBody,
    json: true
  };

  return new Promise((res, rej) => {
    rp(options)
      .then(json => {
        if (json == null) res(json);
        else rej(json);
      })
      .catch(err => rej("Error"));
  });
};

interface LoginData {
  MALSESSIONID: string;
  csrf_token: string;
}
