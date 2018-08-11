module.exports = function (login, password, startData) {
    //   const rp = require("request-promise-native");
    var request = require("request");
    var options = {
        method: "POST",
        url: "https://myanimelist.net/login.php",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Cache-Control": "no-cache",
            cookie: "MALSESSIONID=" + startData.MALSESSIONID + "; MALHLOGSESSID=" + startData.MALHLOGSESSID + "; is_logged_in=1; m_gdpr_mdl=1"
        },
        form: {
            user_name: login,
            password: password,
            cookie: "1",
            submit: "1",
            csrf_token: startData.csrf_token
        },
        followRedirect: false,
        resolveWithFullResponse: true
    };
    var parseResponse = function (res) {
        var cookies = res.headers["set-cookie"];
        cookies = cookies.map(function (cookie) { return cookie.split(";")[0]; });
        cookies = cookies.map(function (cookie) {
            cookie = cookie.split("=");
            return { name: cookie[0], value: cookie[1] };
        });
        var MALSESSIONID = cookies.find(function (cookie) { return cookie.name == "MALSESSIONID"; })
            .value;
        var out = {
            MALSESSIONID: MALSESSIONID,
            csrf_token: startData.csrf_token
        };
        return out;
    };
    return new Promise(function (EndRes, rej) {
        request(options, function (err, res) {
            EndRes(parseResponse(res));
        });
    });
};
