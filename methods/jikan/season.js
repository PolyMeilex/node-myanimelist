module.exports = function (year, season) {
    var rp = require('request-promise-native');
    var seasonS = '';
    if (season) {
        seasonS = '/' + season;
    }
    return new Promise(function (res, rej) {
        rp("https://api.jikan.moe/season/" + year + seasonS)
            .then(function (res) { return JSON.parse(res); })
            .then(function (json) { return res(json); })
            .catch(function (err) { return rej("Error"); });
    });
};
