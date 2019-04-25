"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Jikan API
var anime_1 = require("./methods/jikan/anime");
var manga_1 = require("./methods/jikan/manga");
var person_1 = require("./methods/jikan/person");
var character_1 = require("./methods/jikan/character");
var season_1 = require("./methods/jikan/season");
var seasonArchive_1 = require("./methods/jikan/seasonArchive");
var schedule_1 = require("./methods/jikan/schedule");
var search_1 = require("./methods/jikan/search");
var top_1 = require("./methods/jikan/top");
var genre_1 = require("./methods/jikan/genre");
var producer_1 = require("./methods/jikan/producer");
var user_1 = require("./methods/jikan/user");
//Poly Methods
var avatar_1 = require("./methods/poly/avatar");
var list_1 = require("./methods/poly/list");
var animeUpdates_1 = require("./methods/poly/animeUpdates");
var days_1 = require("./methods/poly/days");
var noApiLogin_1 = require("./methods/poly/noApiLogin");
var notifications_1 = require("./methods/poly/loginRequired/notifications");
var animeEdit_1 = require("./methods/poly/loginRequired/animeEdit");
var MalClient = /** @class */ (function () {
    function MalClient() {
        //Jikan API
        this.anime = anime_1.default;
        this.manga = manga_1.default;
        this.person = person_1.default;
        this.character = character_1.default;
        this.search = search_1.default;
        this.season = season_1.default;
        this.seasonArchive = seasonArchive_1.default;
        this.schedule = schedule_1.default;
        this.top = top_1.default;
        this.genre = genre_1.default;
        this.producer = producer_1.default;
        this.user = user_1.default;
        //Poly Methods
        this.avatar = avatar_1.default;
        this.list = list_1.default;
        this.animeUpdates = animeUpdates_1.default;
        //Poly Methods (Api is down methods)
        this.days = days_1.default;
        this.login = noApiLogin_1.default;
        this.notifications = notifications_1.default;
        this.animeEdit = animeEdit_1.default;
    }
    return MalClient;
}());
exports.MalClient = MalClient;
global["jikanBaseUrl"] = "https://api.jikan.moe/v3";
var Mal = new MalClient();
exports.Mal = Mal;
var version = require('../package.json').version;
exports.version = version;
exports.default = Mal;

//# sourceMappingURL=index.js.map
