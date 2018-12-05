module.exports = function (type, query, page, limit) {
    var rp = require('request-promise-native');
    var queryS = '';
    var pageS = '';
    var limitS = '';
    if (query) {
        queryS = '/' + query;
        if (page)
            pageS = '&page=' + page;
        if (limit)
            limitS = '&limit=' + limit;
    }
    return new Promise(function (res, rej) {
        rp(global['jikanBaseUrl'] + ("/search/" + type + "?q=" + queryS + pageS + limitS))
            .then(function (res) { return JSON.parse(res); })
            .then(function (json) { return res(json); })
            .catch(function (err) { return rej("Error"); });
    });
};
