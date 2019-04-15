"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mal = /** @class */ (function () {
    function Mal() {
    }
    //Jikan API
    Mal.prototype.anime = function (id, request, parameter) {
        return require("./methods/jikan/anime")(id, request, parameter);
    };
    ;
    Mal.prototype.manga = function (id, request) {
        return require("./methods/jikan/manga")(id, request);
    };
    ;
    Mal.prototype.person = function (id, request) {
        return require("./methods/jikan/person")(id, request);
    };
    ;
    Mal.prototype.character = function (id, request) {
        return require("./methods/jikan/character")(id, request);
    };
    ;
    Mal.prototype.search = function (type, query, filter) {
        return require("./methods/jikan/search")(type, query, filter);
    };
    ;
    Mal.prototype.season = function (year, season) {
        return require("./methods/jikan/season")(year, season);
    };
    ;
    Mal.prototype.seasonArchive = function () {
        return require("./methods/jikan/seasonArchive")();
    };
    ;
    Mal.prototype.schedule = function (day) {
        return require("./methods/jikan/schedule")(day);
    };
    ;
    Mal.prototype.top = function (type, page, subtype) {
        return require("./methods/jikan/top")(type, page, subtype);
    };
    ;
    Mal.prototype.genre = function (type, genre_id, page) {
        return require("./methods/jikan/genre")(type, genre_id, page);
    };
    ;
    Mal.prototype.producer = function (producer_id, page) {
        return require("./methods/jikan/producer")(producer_id, page);
    };
    ;
    Mal.prototype.user = function (username, request, argument, argument2) {
        return require("./methods/jikan/user")(username, request, argument, argument2);
    };
    ;
    //Poly Methods
    Mal.prototype.avatar = function (name) {
        return require("./methods/poly/avatar")(name);
    };
    ;
    Mal.prototype.list = function (name) {
        return require("./methods/poly/list")(name);
    };
    ;
    Mal.prototype.animeUpdates = function (name) {
        return require("./methods/poly/animeUpdates")(name);
    };
    ;
    //Poly Methods (Api is down methods)
    Mal.prototype.days = function (name, type) {
        return require("./methods/poly/days")(name, type);
    };
    ;
    Mal.prototype.login = function (login, password) {
        return require("./methods/poly/noApiLogin")(login, password);
    };
    ;
    Mal.prototype.notifications = function (log) {
        return require("./methods/poly/loginRequired/notifications")(log);
    };
    ;
    Mal.prototype.animeEdit = function (sendJsonBody, log) {
        return require("./methods/poly/loginRequired/animeEdit")(sendJsonBody, log);
    };
    ;
    return Mal;
}());
global["jikanBaseUrl"] = "https://api.jikan.moe/v3";
var obj = new Mal();
module.exports = obj;
module.exports.default = obj;
exports.default = obj;

//# sourceMappingURL=index.js.map
