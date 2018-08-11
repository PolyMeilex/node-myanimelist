module.exports = function () {
    var rp = require("request-promise-native");
    var cheerio = require("cheerio");
    var parseResponse = function (res) {
        var $ = cheerio.load(res.body);
        var cookies = res.headers["set-cookie"];
        cookies = cookies.map(function (cookie) { return cookie.split(";")[0]; });
        cookies = cookies.map(function (cookie) {
            cookie = cookie.split("=");
            return { name: cookie[0], value: cookie[1] };
        });
        var outObj = {
            csrf_token: $('[name="csrf_token"]').attr("content"),
            MALSESSIONID: null,
            MALHLOGSESSID: null
        };
        outObj.MALSESSIONID = cookies.find(function (cookie) { return cookie.name == "MALSESSIONID"; }).value;
        outObj.MALHLOGSESSID = cookies.find(function (cookie) { return cookie.name == "MALHLOGSESSID"; }).value;
        return outObj;
    };
    return new Promise(function (res, rej) {
        rp({
            url: "https://myanimelist.net/about.php?go=contact",
            resolveWithFullResponse: true
        })
            .then(function (res) { return parseResponse(res); })
            .then(function (outObj) { return res(outObj); })
            .catch(function (err) { return rej("Tokens Not Found"); });
    });
};
