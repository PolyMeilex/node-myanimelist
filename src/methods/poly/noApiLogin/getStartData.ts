import axios from "axios";
import * as cheerio from "cheerio";

module.exports = () => {
  const parseResponse = res => {
    const $ = cheerio.load(res.data);

    let cookies = res.headers["set-cookie"];

    cookies = cookies.map(cookie => cookie.split(";")[0]);

    cookies = cookies.map(cookie => {
      cookie = cookie.split("=");
      return { name: cookie[0], value: cookie[1] };
    });

    let outObj = {
      csrf_token: $('[name="csrf_token"]').attr("content"),
      MALSESSIONID: null,
      MALHLOGSESSID: null
    };

    outObj.MALSESSIONID = cookies.find(
      cookie => cookie.name == "MALSESSIONID"
    ).value;

    outObj.MALHLOGSESSID = cookies.find(
      cookie => cookie.name == "MALHLOGSESSID"
    ).value;

    return outObj;
  };

  return new Promise((res, rej) => {
    axios
      .get("https://myanimelist.net/about.php?go=contact")
      .then(res => parseResponse(res))
      .then(outObj => res(outObj))
      .catch(err => rej("Tokens Not Found"));
  });
};
