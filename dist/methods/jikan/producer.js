module.exports = function (producer_id, page) {
    var rp = require('request-promise-native');
    var pageS = '';
    if (page) {
        pageS = '/' + page;
    }
    return new Promise(function (res, rej) {
        rp(global['jikanBaseUrl'] + ("/producer/" + producer_id + pageS))
            .then(function (res) { return JSON.parse(res); })
            .then(function (json) { return res(json); })
            .catch(function (err) { return rej("Error: " + err); });
    });
};

//# sourceMappingURL=producer.js.map
