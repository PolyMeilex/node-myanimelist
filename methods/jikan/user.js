module.exports = function (username, request, argument, argument2) {
    var rp = require('request-promise-native');
    var requestS = '';
    var argumentS = '';
    var argument2S = '';
    if (request) {
        requestS = '/' + request;
        if (argument) {
            argumentS = '/' + argument;
            if (argument2) {
                argument2S = '/' + argument2;
            }
        }
    }
    return new Promise(function (res, rej) {
        rp(global['jikanBaseUrl'] + ("/user/" + username + requestS + argumentS + argument2S))
            .then(function (res) { return JSON.parse(res); })
            .then(function (json) { return res(json); })
            .catch(function (err) { return rej("Error, Maybe friends page don't exsist? "); });
    });
};
