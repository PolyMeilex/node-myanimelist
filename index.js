"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mal = /** @class */ (function () {
    function Mal() {
        //Jikan API
        this.anime = function (id, request, parameter) {
            return require("./methods/jikan/anime")(id, request, parameter);
        };
        this.manga = function (id, request) {
            return require("./methods/jikan/manga")(id, request);
        };
        this.person = function (id, request) {
            return require("./methods/jikan/person")(id, request);
        };
        this.character = function (id, request) {
            return require("./methods/jikan/character")(id, request);
        };
        this.search = function (type, query, filter) {
            return require("./methods/jikan/search")(type, query, filter);
        };
        this.season = function (year, season) {
            return require("./methods/jikan/season")(year, season);
        };
        this.seasonArchive = function () {
            return require("./methods/jikan/seasonArchive")();
        };
        this.schedule = function (day) {
            return require("./methods/jikan/schedule")(day);
        };
        this.top = function (type, page, subtype) {
            return require("./methods/jikan/top")(type, page, subtype);
        };
        this.genre = function (type, genre_id, page) {
            return require("./methods/jikan/genre")(type, genre_id, page);
        };
        this.producer = function (producer_id, page) {
            return require("./methods/jikan/producer")(producer_id, page);
        };
        this.user = function (username, request, argument, argument2) {
            return require("./methods/jikan/user")(username, request, argument, argument2);
        };
        //Poly Methods
        this.avatar = function (name) {
            return require("./methods/poly/avatar")(name);
        };
        this.list = function (name) {
            return require("./methods/poly/list")(name);
        };
        this.animeUpdates = function (name) {
            return require("./methods/poly/animeUpdates")(name);
        };
        //Poly Methods (Api is down methods)
        this.days = function (name, type) {
            return require("./methods/poly/days")(name, type);
        };
        this.login = function (login, password) {
            return require("./methods/poly/noApiLogin")(login, password);
        };
        this.notifications = function (log) {
            return require("./methods/poly/loginRequired/notifications")(log);
        };
        this.animeEdit = function (sendJsonBody, log) {
            return require("./methods/poly/loginRequired/animeEdit")(sendJsonBody, log);
        };
    }
    return Mal;
}());
global['jikanBaseUrl'] = "https://api.jikan.moe/v3";
var obj = new Mal();
module.exports = obj;
module.exports.default = obj;
exports.default = obj;
