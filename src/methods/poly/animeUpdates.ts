import axios from "axios";

import * as cheerio from "cheerio";

export default function(name: string) {
  return new Promise((res, rej) => {
    let $ = null;
    axios
      .get(`https://myanimelist.net/profile/${name}`)
      .then(res => cheerio.load(res.data))
      .then(ch => {
        $ = ch;
        const updatesA = $("div.statistics-updates", "div.updates.anime");
        if (!updatesA) {
          if (updatesA.length == 0) res([]);
        }
        return updatesA;
      })
      .then(updatesA => {
        let array = [];
        updatesA.each((i, elem) => {
          let title = $(elem)
            .find("a", "div.data")
            .text()
            .trim();
          let link = $(elem)
            .find("a")
            .attr("href");
          let ep = $(elem)
            .find("div.fn-grey2 span")
            .eq(0)
            .text()
            .trim();
          let score = $(elem)
            .find("div.fn-grey2 span")
            .eq(1)
            .text()
            .trim();
          let img = $(elem)
            .find("img")
            .attr("src");
          let graph = $(elem).find("span.graph-inner");
          let date = $(elem)
            .find("span.fn-grey2", "div.clearfix")
            .text()
            .trim();

          let watching = graph.hasClass("watching");
          let dropped = graph.hasClass("dropped");
          let completed = graph.hasClass("completed");
          let on_hold = graph.hasClass("on_hold");
          let plan_to_watch = graph.hasClass("plan_to_watch");

          let color = 0;
          if (watching) {
            color = 2994233;
          } else if (dropped) {
            color = 10563377;
          } else if (completed) {
            color = 2507919;
          } else if (on_hold) {
            color = 16372823;
          } else if (plan_to_watch) {
            color = 12829635;
          }

          ep = parseInt(ep);
          score = parseInt(score);

          let obj = { title, link, ep, score, img, date, color };
          array.push(obj);
        });

        res(array);
      })
      .catch(e => rej(e));
  });
}

export interface animeUpdatesOBJ {
  title: string;
  link: string;
  ep: number;
  score: number;
  img: string;
  date: string;
  color: number;
}
