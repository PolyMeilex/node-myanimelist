module.exports = function (day) {
    var rp = require('request-promise-native');
    return new Promise(function (res, rej) {
        rp("https://api.jikan.moe/schedule/" + day)
            .then(function (res) { return JSON.parse(res); })
            .then(function (json) { return res(json); })
            .catch(function (err) { return rej("Error"); });
    });
};
