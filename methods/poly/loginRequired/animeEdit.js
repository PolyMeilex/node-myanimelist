module.exports = function (sendJsonBody, log) {
    var rp = require("request-promise-native");
    var jsonBody = sendJsonBody;
    jsonBody.csrf_token = log.csrf_token;
    var options = {
        method: "POST",
        url: "https://myanimelist.net/ownlist/anime/edit.json",
        headers: {
            "Cache-Control": "no-cache",
            "Content-Type": "application/json",
            cookie: "MALSESSIONID=" + log.MALSESSIONID + "; is_logged_in=1;"
        },
        body: jsonBody,
        json: true
    };
    return new Promise(function (res, rej) {
        rp(options)
            .then(function (json) {
            if (json == null)
                res(json);
            else
                rej(json);
        })
            .catch(function (err) { return rej("Error"); });
    });
};
