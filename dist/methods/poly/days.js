"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (name, type) {
    if (type === void 0) { type = "anime"; }
    var rp = require("request-promise-native");
    var cheerio = require("cheerio");
    return new Promise(function (res, rej) {
        rp("https://myanimelist.net/profile/" + name)
            .then(function (res) { return cheerio.load(res); })
            .then(function ($) {
            return $(".stats." + type + " .stat-score")
                .children()
                .eq(0)
                .text();
        })
            .then(function (daysRaw) { return daysRaw.split(": ")[1]; })
            .then(function (daysStr) { return parseFloat(daysStr); })
            .then(function (daysNum) {
            if (isNaN(daysNum))
                throw new Error("Not a number");
            else
                res(daysNum);
        })
            .catch(function (err) { return rej("Days Not Found"); });
    });
});

//# sourceMappingURL=days.js.map
