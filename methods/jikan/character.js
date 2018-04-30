module.exports = function (id, request) {
    var rp = require('request-promise-native');
    var requestS = '';
    var parameterS = '';
    if (request) {
        requestS = '/' + request;
    }
    return new Promise(function (res, rej) {
        rp("https://api.jikan.moe/character/" + id + requestS)
            .then(function (res) { return JSON.parse(res); })
            .then(function (json) { return res(json); })
            .catch(function (err) { return rej("Error"); });
    });
};
