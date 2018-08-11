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
        this.search = function (type, query, page) {
            return require("./methods/jikan/search")(type, query, page);
        };
        this.season = function (year, season) {
            return require("./methods/jikan/season")(year, season);
        };
        this.schedule = function (day) {
            return require("./methods/jikan/schedule")(day);
        };
        this.top = function (type, page, subtype) {
            return require("./methods/jikan/top")(type, page, subtype);
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
        this.notyfications = function (log) {
            return require("./methods/poly/loginRequired/notifications")(log);
        };
    }
    return Mal;
}());
var obj = new Mal();
module.exports = obj;
module.exports.default = obj;
exports.default = obj;
