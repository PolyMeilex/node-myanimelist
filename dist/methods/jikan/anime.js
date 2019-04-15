module.exports = function (id, request, parameter) {
    var rp = require('request-promise-native');
    var requestS = '';
    var parameterS = '';
    if (request) {
        requestS = '/' + request;
        if (parameter)
            parameterS = '/' + parameter;
    }
    return new Promise(function (res, rej) {
        rp(global['jikanBaseUrl'] + ("/anime/" + id + requestS + parameterS))
            .then(function (res) { return JSON.parse(res); })
            .then(function (json) { return res(json); })
            .catch(function (err) { return rej("Error: " + err); });
    });
};

//# sourceMappingURL=anime.js.map
