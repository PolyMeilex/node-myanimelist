module.exports = function (login, password) {
    var getStartData = require("./getStartData");
    var loginWithData = require("./loginWithData");
    return new Promise(function (res, rej) {
        getStartData()
            .then(function (startData) { return loginWithData(login, password, startData); })
            .then(function (logData) { return res(logData); })
            .catch(function (err) { return rej(err); });
    });
};
