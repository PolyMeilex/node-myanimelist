module.exports = function (name) {
    var rp = require('request-promise-native');
    var cheerio = require('cheerio');
    return new Promise(function (res, rej) {
        rp("https://myanimelist.net/profile/" + name)
            .then(function (res) { return cheerio.load(res); })
            .then(function ($) { return $('img', 'div.user-image'); })
            .then(function (img) { return img.attr('src'); })
            .then(function (url) { return res(url); })
            .catch(function (err) { return rej("Image Not Found"); });
    });
};
