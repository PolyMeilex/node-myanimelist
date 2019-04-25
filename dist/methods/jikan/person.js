"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (id, request) {
    var rp = require('request-promise-native');
    var requestS = '';
    var parameterS = '';
    if (request) {
        requestS = '/' + request;
    }
    return new Promise(function (res, rej) {
        rp(global['jikanBaseUrl'] + ("/person/" + id + requestS))
            .then(function (res) { return JSON.parse(res); })
            .then(function (json) { return res(json); })
            .catch(function (err) { return rej("Error: " + err); });
    });
});

//# sourceMappingURL=person.js.map
