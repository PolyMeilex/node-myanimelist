"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = function (log) {
    var rp = require("request-promise-native");
    var options = {
        method: "POST",
        url: "https://myanimelist.net/notification/api/request-items.json",
        headers: {
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            cookie: "MALSESSIONID=" + log.MALSESSIONID + "; is_logged_in=1;"
        },
        form: { csrf_token: log.csrf_token },
        json: true
    };
    return new Promise(function (res, rej) {
        rp(options)
            .then(function (json) { return res(json); })
            .catch(function (err) { return rej("Notyfications Not Found"); });
    });
};

//# sourceMappingURL=notifications.js.map
