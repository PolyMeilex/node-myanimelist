module.exports = function (type, query, page) {
    var rp = require('request-promise-native');
    var queryS = '';
    var pageS = '';
    if (query) {
        queryS = '/' + query;
        if (page)
            pageS = '/' + page;
    }
    return new Promise(function (res, rej) {
        rp("https://api.jikan.moe/search/" + type + queryS + pageS)
            .then(function (res) { return JSON.parse(res); })
            .then(function (json) { return res(json); })
            .catch(function (err) { return rej("Error"); });
    });
};
