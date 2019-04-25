"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (type, query, filter) {
    var rp = require('request-promise-native');
    var queryS = '';
    var pageS = '';
    var limitS = '';
    if (query) {
        queryS = '?q=' + query;
        if (filter && filter.page)
            pageS = '&page=' + filter.page;
        if (filter && filter.limit)
            limitS = '&limit=' + filter.limit;
    }
    return new Promise(function (res, rej) {
        rp(global['jikanBaseUrl'] + ("/search/" + type + queryS + pageS + limitS))
            .then(function (res) { return JSON.parse(res); })
            .then(function (json) { return res(json); })
            .catch(function (err) { return rej("Error: " + err); });
    });
});

//# sourceMappingURL=search.js.map
