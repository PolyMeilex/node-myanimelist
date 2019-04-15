module.exports = function (type, genre_id, page) {
    var rp = require('request-promise-native');
    var genre_idS = '';
    var pageS = '';
    if (genre_id) {
        genre_idS = '/' + genre_id;
        if (page)
            pageS = '/' + page;
    }
    return new Promise(function (res, rej) {
        rp(global['jikanBaseUrl'] + ("/genre/" + type + genre_idS + pageS))
            .then(function (res) { return JSON.parse(res); })
            .then(function (json) { return res(json); })
            .catch(function (err) { return rej("Error: " + err); });
    });
};

//# sourceMappingURL=genre.js.map
