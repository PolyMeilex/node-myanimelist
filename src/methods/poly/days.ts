import * as rp from "request-promise-native";
import * as cheerio from "cheerio";

export default function (name: string, type: string = "anime") {
  return new Promise((res, rej) => {
    rp(`https://myanimelist.net/profile/${name}`)
      .then(res => cheerio.load(res))
      .then($ =>
        $(`.stats.${type} .stat-score`)
          .children()
          .eq(0)
          .text()
      )
      .then(daysRaw => daysRaw.split(": ")[1])
      .then(daysStr => parseFloat(daysStr))
      .then(daysNum => {
        if (isNaN(daysNum)) throw new Error("Not a number");
        else res(daysNum);
      })
      .catch(err => rej("Days Not Found"));
  });
};
