"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = function (name) {
    var rp = require('request-promise-native');
    var cheerio = require('cheerio');
    return new Promise(function (res, rej) {
        var $ = null;
        rp("https://myanimelist.net/profile/" + name)
            .then(function (body) { return cheerio.load(body); })
            .then(function (ch) {
            $ = ch;
            var updatesA = $('div.statistics-updates', 'div.updates.anime');
            if (!updatesA) {
                if (updatesA.length == 0)
                    res([]);
            }
            return updatesA;
        })
            .then(function (updatesA) {
            var array = [];
            updatesA.each(function (i, elem) {
                var title = $(elem).find('a', 'div.data').text().trim();
                var link = $(elem).find('a').attr('href');
                var ep = $(elem).find('div.fn-grey2 span').eq(0).text().trim();
                var score = $(elem).find('div.fn-grey2 span').eq(1).text().trim();
                var img = $(elem).find('img').attr('src');
                var graph = $(elem).find('span.graph-inner');
                var date = $(elem).find('span.fn-grey2', 'div.clearfix').text().trim();
                var watching = graph.hasClass('watching');
                var dropped = graph.hasClass('dropped');
                var completed = graph.hasClass('completed');
                var on_hold = graph.hasClass('on_hold');
                var plan_to_watch = graph.hasClass('plan_to_watch');
                var color = 0;
                if (watching) {
                    color = 2994233;
                }
                else if (dropped) {
                    color = 10563377;
                }
                else if (completed) {
                    color = 2507919;
                }
                else if (on_hold) {
                    color = 16372823;
                }
                else if (plan_to_watch) {
                    color = 12829635;
                }
                ep = parseInt(ep);
                score = parseInt(score);
                var obj = { title: title, link: link, ep: ep, score: score, img: img, date: date, color: color };
                array.push(obj);
            });
            res(array);
        })
            .catch(function (e) { return rej(e); });
    });
};

//# sourceMappingURL=animeUpdates.js.map
