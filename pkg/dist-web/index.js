import properUrlJoin from 'proper-url-join';
import esmFetch from 'esm-fetch';

function joinUrl(base, params) {
    // @ts-ignore
    return properUrlJoin(base, ...params);
}

const jikanUrl = "https://api.jikan.moe/v3";
// @ts-ignore
// global.ENVTYPE = "MOCHA";
// import axios from "axios";
// @ts-ignore
// global.jikanGet = (s) => s;
// @ts-ignore
// global.jikanGet = function jikanGet(url: string): Promise<any> {
//   return axios.get(url);
// };
// @ts-ignore
// if (global.ENVTYPE === "MOCHA") {
//   const axios = import("axios");
//   // const axios = require("axios");
// axios.then(module => {
//   console.log("LOADED");
//     const axios = module.default;
//     // @ts-ignore
//     global.jikanGet = function jikanGet(url: string): Promise<any> {
//       return axios.get(url);
//     };
// });
// }
// else {
//   // @ts-ignore
//   global.jikanGet = function jikanGet(url: string): Promise<any> {
//     // @ts-ignore
//     return fetch(url);
//   };
// }
// }
// @ts-ignore
// global.jikanGet = function jikanGet(url: string): Promise<any> {
//   return axios.get(url);
// };
// @ts-ignore
// let get: (string) => any = global.jikanGet;
function jikanGet(url) {
    // if (get) {
    //   return get(url);
    // }
    // else {
    //   // @ts-ignore
    //   return global.jikanGet(url);
    // }
    // @ts-ignore
    return globalThis.jikanGet(url);
}

class Anime {
    constructor(id) {
        this.baseUrl = `${jikanUrl}/anime/${id}`;
    }
    info() {
        return jikanGet(this.baseUrl);
    }
    charactersStaff() {
        return jikanGet(joinUrl(this.baseUrl, ["characters_staff"]));
    }
    episodes(p) {
        let params = ["episodes"];
        if (p != null)
            params.push(String(p));
        return jikanGet(joinUrl(this.baseUrl, params));
    }
    news() {
        return jikanGet(joinUrl(this.baseUrl, ["news"]));
    }
    pictures() {
        return jikanGet(joinUrl(this.baseUrl, ["pictures"]));
    }
    videos() {
        return jikanGet(joinUrl(this.baseUrl, ["videos"]));
    }
    stats() {
        return jikanGet(joinUrl(this.baseUrl, ["stats"]));
    }
    forum() {
        return jikanGet(joinUrl(this.baseUrl, ["forum"]));
    }
    moreInfo() {
        return jikanGet(joinUrl(this.baseUrl, ["moreinfo"]));
    }
    reviews(p) {
        let params = ["reviews"];
        if (p != null)
            params.push(String(p));
        return jikanGet(joinUrl(this.baseUrl, params));
    }
    recommendations() {
        return jikanGet(joinUrl(this.baseUrl, ["recommendations"]));
    }
    userUpdates(p) {
        let params = ["userupdates"];
        if (p != null)
            params.push(String(p));
        return jikanGet(joinUrl(this.baseUrl, params));
    }
}
function anime (id) {
    return new Anime(id);
}

class Manga {
    constructor(id) {
        this.baseUrl = `${jikanUrl}/manga/${id}`;
    }
    info() {
        return jikanGet(this.baseUrl);
    }
    characters() {
        return jikanGet(joinUrl(this.baseUrl, ["characters"]));
    }
    news() {
        return jikanGet(joinUrl(this.baseUrl, ["news"]));
    }
    pictures() {
        return jikanGet(joinUrl(this.baseUrl, ["pictures"]));
    }
    stats() {
        return jikanGet(joinUrl(this.baseUrl, ["stats"]));
    }
    forum() {
        return jikanGet(joinUrl(this.baseUrl, ["forum"]));
    }
    moreInfo() {
        return jikanGet(joinUrl(this.baseUrl, ["moreinfo"]));
    }
    reviews(p) {
        let params = ["reviews"];
        if (p != null)
            params.push(String(p));
        return jikanGet(joinUrl(this.baseUrl, params));
    }
    recommendations() {
        return jikanGet(joinUrl(this.baseUrl, ["recommendations"]));
    }
    userUpdates(p) {
        let params = ["userupdates"];
        if (p != null)
            params.push(String(p));
        return jikanGet(joinUrl(this.baseUrl, params));
    }
}
function manga (id) {
    return new Manga(id);
}

class Person {
    constructor(id) {
        this.baseUrl = `${jikanUrl}/person/${id}`;
    }
    info() {
        return jikanGet(this.baseUrl);
    }
    pictures() {
        return jikanGet(joinUrl(this.baseUrl, ["pictures"]));
    }
}
function person (id) {
    return new Person(id);
}

class Character {
    constructor(id) {
        this.baseUrl = `${jikanUrl}/character/${id}`;
    }
    info() {
        return jikanGet(this.baseUrl);
    }
    pictures() {
        return jikanGet(joinUrl(this.baseUrl, ["pictures"]));
    }
}
function character (id) {
    return new Character(id);
}

class Search {
    constructor() {
        this.baseUrl = `${jikanUrl}/search`;
    }
    search(type, params) {
        let qparams = Object.keys(params)
            .filter((k) => params[k] != null)
            .map((k) => `${k}=${encodeURIComponent(params[k])}`)
            .join("&");
        return jikanGet(joinUrl(this.baseUrl, [type, "?" + qparams]));
    }
    anime(params) {
        return this.search("anime", params);
    }
    manga(params) {
        return this.search("manga", params);
    }
    person(params) {
        return this.search("person", params);
    }
    character(params) {
        return this.search("character", params);
    }
}
function search () {
    return new Search();
}

class Season {
    constructor() {
        this.baseUrl = `${jikanUrl}/season`;
    }
    info(year, season) {
        return jikanGet(joinUrl(this.baseUrl, [String(year), String(season)]));
    }
}
function season (year, season) {
    return new Season().info(year, season);
}

class SeasonArchive {
    constructor() {
        this.baseUrl = `${jikanUrl}/season/archive`;
    }
    info() {
        return jikanGet(this.baseUrl);
    }
}
function seasonArchive () {
    return new SeasonArchive().info();
}

class SeasonLater {
    constructor() {
        this.baseUrl = `${jikanUrl}/season/later`;
    }
    info() {
        return jikanGet(this.baseUrl);
    }
}
function seasonLater () {
    return new SeasonLater().info();
}

class Schedule {
    constructor() {
        this.baseUrl = `${jikanUrl}/schedule`;
    }
    all() {
        return jikanGet(this.baseUrl);
    }
    monday() {
        return jikanGet(joinUrl(this.baseUrl, ["monday"]));
    }
    tuesday() {
        return jikanGet(joinUrl(this.baseUrl, ["tuesday"]));
    }
    wednesday() {
        return jikanGet(joinUrl(this.baseUrl, ["wednesday"]));
    }
    thursday() {
        return jikanGet(joinUrl(this.baseUrl, ["thursday"]));
    }
    friday() {
        return jikanGet(joinUrl(this.baseUrl, ["friday"]));
    }
    saturday() {
        return jikanGet(joinUrl(this.baseUrl, ["saturday"]));
    }
    sunday() {
        return jikanGet(joinUrl(this.baseUrl, ["sunday"]));
    }
    other() {
        return jikanGet(joinUrl(this.baseUrl, ["other"]));
    }
    unknown() {
        return jikanGet(joinUrl(this.baseUrl, ["unknown"]));
    }
}
function schedule () {
    return new Schedule();
}

class Top {
    constructor() {
        this.baseUrl = `${jikanUrl}/top`;
    }
    anime() {
        return new TopAnime(this.baseUrl);
    }
    manga() {
        return new TopManga(this.baseUrl);
    }
    people() {
        return new TopSimple(this.baseUrl, "people");
    }
    characters() {
        return new TopSimple(this.baseUrl, "characters");
    }
}
// Class For "people" And "characters"
class TopSimple {
    constructor(baseUrl, type) {
        this.baseUrl = baseUrl;
        this.type = type;
    }
    topGet(p, subType) {
        let params = [this.type];
        if (p != null)
            params[1] = String(p);
        else
            params[1] = "1";
        params[2] = subType;
        const url = joinUrl(this.baseUrl, params);
        return jikanGet(url);
    }
    all(p) {
        return this.topGet(p, "");
    }
}
class TopAnime {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    topGet(p, subType) {
        let params = ["anime"];
        if (p != null)
            params[1] = String(p);
        else
            params[1] = "1";
        params[2] = subType;
        const url = joinUrl(this.baseUrl, params);
        return jikanGet(url);
    }
    all(p) {
        return this.topGet(p, "");
    }
    airing(p) {
        return this.topGet(p, "airing");
    }
    upcoming(p) {
        return this.topGet(p, "upcoming");
    }
    tv(p) {
        return this.topGet(p, "tv");
    }
    movie(p) {
        return this.topGet(p, "movie");
    }
    ova(p) {
        return this.topGet(p, "ova");
    }
    special(p) {
        return this.topGet(p, "special");
    }
    byPopularity(p) {
        return this.topGet(p, "bypopularity");
    }
    favorite(p) {
        return this.topGet(p, "favorite");
    }
}
class TopManga {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    topGet(p, subType) {
        let params = ["manga"];
        if (p != null)
            params[1] = String(p);
        else
            params[1] = "1";
        params[2] = subType;
        const url = joinUrl(this.baseUrl, params);
        return jikanGet(url);
    }
    all(p) {
        return this.topGet(p, "");
    }
    manga(p) {
        return this.topGet(p, "manga");
    }
    novels(p) {
        return this.topGet(p, "novels");
    }
    oneshots(p) {
        return this.topGet(p, "oneshots");
    }
    doujin(p) {
        return this.topGet(p, "doujin");
    }
    manhwa(p) {
        return this.topGet(p, "manhwa");
    }
    manhua(p) {
        return this.topGet(p, "manhua");
    }
    byPopularity(p) {
        return this.topGet(p, "bypopularity");
    }
    favorite(p) {
        return this.topGet(p, "favorite");
    }
}
function top () {
    return new Top();
}

class Genre {
    constructor() {
        this.baseUrl = `${jikanUrl}/genre`;
    }
    anime(genre, p) {
        let params = ["anime", String(genre)];
        if (p != null)
            params[2] = String(p);
        return jikanGet(joinUrl(this.baseUrl, params));
    }
    manga(genre, p) {
        let params = ["manga", String(genre)];
        if (p != null)
            params[2] = String(p);
        return jikanGet(joinUrl(this.baseUrl, params));
    }
}
function genre () {
    return new Genre();
}

class Producer {
    constructor() {
        this.baseUrl = `${jikanUrl}/producer`;
    }
    info(id, p) {
        let params = [String(id)];
        if (p != null)
            params[1] = String(p);
        return jikanGet(joinUrl(this.baseUrl, params));
    }
}
function producer (id, p) {
    return new Producer().info(id, p);
}

class Magazine {
    constructor() {
        this.baseUrl = `${jikanUrl}/magazine`;
    }
    info(id, p) {
        let params = [String(id)];
        if (p != null)
            params[1] = String(p);
        return jikanGet(joinUrl(this.baseUrl, params));
    }
}
function magazine (id, p) {
    return new Magazine().info(id, p);
}

class User {
    constructor(username) {
        this.baseUrl = `${jikanUrl}/user/${username}`;
    }
    profile() {
        return jikanGet(joinUrl(this.baseUrl, ["profile"]));
    }
    history() {
        return new UserHistory(this.baseUrl);
    }
    friends(p) {
        let params = ["friends"];
        if (p != null)
            params.push(String(p));
        return jikanGet(joinUrl(this.baseUrl, params));
    }
    animelist(p) {
        return new UserAnimelist(this.baseUrl, p);
    }
    mangalist(p) {
        return new UserMangalist(this.baseUrl, p);
    }
}
class UserHistory {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    all() {
        const url = joinUrl(this.baseUrl, ["history"]);
        return jikanGet(url);
    }
    anime() {
        const url = joinUrl(this.baseUrl, ["history", "anime"]);
        return jikanGet(url);
    }
    manga() {
        const url = joinUrl(this.baseUrl, ["history", "manga"]);
        return jikanGet(url);
    }
}
class UserAnimelist {
    constructor(baseUrl, p) {
        this.baseUrl = baseUrl;
        if (p != null)
            this.page = String(p);
        else
            this.page = "1";
    }
    getList(params, qparams) {
        if (qparams != null) {
            let qparams = Object.keys(params)
                .filter((k) => params[k] != null)
                .map((k) => `${k}=${encodeURIComponent(params[k])}`)
                .join("&");
            params.push(qparams);
        }
        const url = joinUrl(this.baseUrl, params);
        return jikanGet(url);
    }
    all(qparams) {
        return this.getList(["animelist", "all", this.page], qparams);
    }
    watching(qparams) {
        return this.getList(["animelist", "watching", this.page], qparams);
    }
    onhold(qparams) {
        return this.getList(["animelist", "onhold", this.page], qparams);
    }
    dropped(qparams) {
        return this.getList(["animelist", "dropped", this.page], qparams);
    }
    plantowatch(qparams) {
        return this.getList(["animelist", "plantowatch", this.page], qparams);
    }
}
class UserMangalist {
    constructor(baseUrl, p) {
        this.baseUrl = baseUrl;
        if (p != null)
            this.page = String(p);
        else
            this.page = "1";
    }
    getList(params, qparams) {
        if (qparams != null) {
            let qparams = Object.keys(params)
                .filter((k) => params[k] != null)
                .map((k) => `${k}=${encodeURIComponent(params[k])}`)
                .join("&");
            params.push(qparams);
        }
        const url = joinUrl(this.baseUrl, params);
        return jikanGet(url);
    }
    all(qparams) {
        return this.getList(["mangalist", "all", this.page], qparams);
    }
    reading(qparams) {
        return this.getList(["mangalist", "reading", this.page], qparams);
    }
    onhold(qparams) {
        return this.getList(["mangalist", "onhold", this.page], qparams);
    }
    dropped(qparams) {
        return this.getList(["mangalist", "dropped", this.page], qparams);
    }
    plantoread(qparams) {
        return this.getList(["mangalist", "plantoread", this.page], qparams);
    }
}
function user (username) {
    return new User(username);
}

class Club {
    constructor(id) {
        this.baseUrl = `${jikanUrl}/club/${id}`;
    }
    info() {
        return jikanGet(this.baseUrl);
    }
    members(p) {
        let params = ["members"];
        if (p != null)
            params.push(String(p));
        return jikanGet(joinUrl(this.baseUrl, params));
    }
}
function club (id) {
    return new Club(id);
}

var AnimeGenre;
(function (AnimeGenre) {
    AnimeGenre[AnimeGenre["action"] = 1] = "action";
    AnimeGenre[AnimeGenre["adventure"] = 2] = "adventure";
    AnimeGenre[AnimeGenre["cars"] = 3] = "cars";
    AnimeGenre[AnimeGenre["comedy"] = 4] = "comedy";
    AnimeGenre[AnimeGenre["dementia"] = 5] = "dementia";
    AnimeGenre[AnimeGenre["demons"] = 6] = "demons";
    AnimeGenre[AnimeGenre["mystery"] = 7] = "mystery";
    AnimeGenre[AnimeGenre["drama"] = 8] = "drama";
    AnimeGenre[AnimeGenre["ecchi"] = 9] = "ecchi";
    AnimeGenre[AnimeGenre["fantasy"] = 10] = "fantasy";
    AnimeGenre[AnimeGenre["game"] = 11] = "game";
    AnimeGenre[AnimeGenre["hentai"] = 12] = "hentai";
    AnimeGenre[AnimeGenre["historical"] = 13] = "historical";
    AnimeGenre[AnimeGenre["horror"] = 14] = "horror";
    AnimeGenre[AnimeGenre["kids"] = 15] = "kids";
    AnimeGenre[AnimeGenre["magic"] = 16] = "magic";
    AnimeGenre[AnimeGenre["martialArts"] = 17] = "martialArts";
    AnimeGenre[AnimeGenre["mecha"] = 18] = "mecha";
    AnimeGenre[AnimeGenre["music"] = 19] = "music";
    AnimeGenre[AnimeGenre["parody"] = 20] = "parody";
    AnimeGenre[AnimeGenre["samurai"] = 21] = "samurai";
    AnimeGenre[AnimeGenre["romance"] = 22] = "romance";
    AnimeGenre[AnimeGenre["school"] = 23] = "school";
    AnimeGenre[AnimeGenre["sciFi"] = 24] = "sciFi";
    AnimeGenre[AnimeGenre["shoujo"] = 25] = "shoujo";
    AnimeGenre[AnimeGenre["shoujoAi"] = 26] = "shoujoAi";
    AnimeGenre[AnimeGenre["shounen"] = 27] = "shounen";
    AnimeGenre[AnimeGenre["shounenAi"] = 28] = "shounenAi";
    AnimeGenre[AnimeGenre["space"] = 29] = "space";
    AnimeGenre[AnimeGenre["sports"] = 30] = "sports";
    AnimeGenre[AnimeGenre["superPower"] = 31] = "superPower";
    AnimeGenre[AnimeGenre["vampire"] = 32] = "vampire";
    AnimeGenre[AnimeGenre["yaoi"] = 33] = "yaoi";
    AnimeGenre[AnimeGenre["yuri"] = 34] = "yuri";
    AnimeGenre[AnimeGenre["harem"] = 35] = "harem";
    AnimeGenre[AnimeGenre["sliceOfLife"] = 36] = "sliceOfLife";
    AnimeGenre[AnimeGenre["supernatural"] = 37] = "supernatural";
    AnimeGenre[AnimeGenre["military"] = 38] = "military";
    AnimeGenre[AnimeGenre["police"] = 39] = "police";
    AnimeGenre[AnimeGenre["psychological"] = 40] = "psychological";
    AnimeGenre[AnimeGenre["thriller"] = 41] = "thriller";
    AnimeGenre[AnimeGenre["seinen"] = 42] = "seinen";
    AnimeGenre[AnimeGenre["josei"] = 43] = "josei";
})(AnimeGenre || (AnimeGenre = {}));
var AnimeGenre$1 = AnimeGenre;

var MangaGenre;
(function (MangaGenre) {
    MangaGenre[MangaGenre["action"] = 1] = "action";
    MangaGenre[MangaGenre["adventure"] = 2] = "adventure";
    MangaGenre[MangaGenre["cars"] = 3] = "cars";
    MangaGenre[MangaGenre["comedy"] = 4] = "comedy";
    MangaGenre[MangaGenre["dementia"] = 5] = "dementia";
    MangaGenre[MangaGenre["demons"] = 6] = "demons";
    MangaGenre[MangaGenre["mystery"] = 7] = "mystery";
    MangaGenre[MangaGenre["drama"] = 8] = "drama";
    MangaGenre[MangaGenre["ecchi"] = 9] = "ecchi";
    MangaGenre[MangaGenre["fantasy"] = 10] = "fantasy";
    MangaGenre[MangaGenre["game"] = 11] = "game";
    MangaGenre[MangaGenre["hentai"] = 12] = "hentai";
    MangaGenre[MangaGenre["historical"] = 13] = "historical";
    MangaGenre[MangaGenre["horror"] = 14] = "horror";
    MangaGenre[MangaGenre["kids"] = 15] = "kids";
    MangaGenre[MangaGenre["magic"] = 16] = "magic";
    MangaGenre[MangaGenre["martialArts"] = 17] = "martialArts";
    MangaGenre[MangaGenre["mecha"] = 18] = "mecha";
    MangaGenre[MangaGenre["music"] = 19] = "music";
    MangaGenre[MangaGenre["parody"] = 20] = "parody";
    MangaGenre[MangaGenre["samurai"] = 21] = "samurai";
    MangaGenre[MangaGenre["romance"] = 22] = "romance";
    MangaGenre[MangaGenre["school"] = 23] = "school";
    MangaGenre[MangaGenre["sciFi"] = 24] = "sciFi";
    MangaGenre[MangaGenre["shoujo"] = 25] = "shoujo";
    MangaGenre[MangaGenre["shoujoAi"] = 26] = "shoujoAi";
    MangaGenre[MangaGenre["shounen"] = 27] = "shounen";
    MangaGenre[MangaGenre["shounenAi"] = 28] = "shounenAi";
    MangaGenre[MangaGenre["space"] = 29] = "space";
    MangaGenre[MangaGenre["sports"] = 30] = "sports";
    MangaGenre[MangaGenre["superPower"] = 31] = "superPower";
    MangaGenre[MangaGenre["vampire"] = 32] = "vampire";
    MangaGenre[MangaGenre["yaoi"] = 33] = "yaoi";
    MangaGenre[MangaGenre["yuri"] = 34] = "yuri";
    MangaGenre[MangaGenre["harem"] = 35] = "harem";
    MangaGenre[MangaGenre["sliceOfLife"] = 36] = "sliceOfLife";
    MangaGenre[MangaGenre["supernatural"] = 37] = "supernatural";
    MangaGenre[MangaGenre["military"] = 38] = "military";
    MangaGenre[MangaGenre["police"] = 39] = "police";
    MangaGenre[MangaGenre["psychological"] = 40] = "psychological";
    MangaGenre[MangaGenre["seinen"] = 41] = "seinen";
    MangaGenre[MangaGenre["josei"] = 42] = "josei";
    MangaGenre[MangaGenre["doujinshi"] = 43] = "doujinshi";
    MangaGenre[MangaGenre["genderBender"] = 44] = "genderBender";
    MangaGenre[MangaGenre["thriller"] = 45] = "thriller";
})(MangaGenre || (MangaGenre = {}));
var MangaGenre$1 = MangaGenre;

var AnimeType;
(function (AnimeType) {
    AnimeType["tv"] = "tv";
    AnimeType["ova"] = "ova";
    AnimeType["movie"] = "movie";
    AnimeType["special"] = "special";
    AnimeType["ona"] = "ona";
    AnimeType["music"] = "music";
})(AnimeType || (AnimeType = {}));
var AnimeType$1 = AnimeType;

var MangaType;
(function (MangaType) {
    MangaType["manga"] = "manga";
    MangaType["novel"] = "novel";
    MangaType["oneshot"] = "oneshot";
    MangaType["doujin"] = "doujin";
    MangaType["manhwa"] = "manhwa";
    MangaType["manhua"] = "manhua";
})(MangaType || (MangaType = {}));
var MangaType$1 = MangaType;

var AnimeStatus;
(function (AnimeStatus) {
    AnimeStatus["airing"] = "airing";
    AnimeStatus["completed"] = "completed";
    AnimeStatus["to_be_aired"] = "to_be_aired";
})(AnimeStatus || (AnimeStatus = {}));
var AnimeStatus$1 = AnimeStatus;

var MangaStatus;
(function (MangaStatus) {
    MangaStatus["publishing"] = "publishing";
    MangaStatus["completed"] = "completed";
    MangaStatus["to_be_published"] = "to_be_published";
})(MangaStatus || (MangaStatus = {}));
var MangaStatus$1 = MangaStatus;

var AnimeOrderBy;
(function (AnimeOrderBy) {
    AnimeOrderBy["title"] = "title";
    AnimeOrderBy["start_date"] = "start_date";
    AnimeOrderBy["end_date"] = "end_date";
    AnimeOrderBy["score"] = "score";
    AnimeOrderBy["type"] = "type";
    AnimeOrderBy["members"] = "members";
    AnimeOrderBy["id"] = "id";
    AnimeOrderBy["episodes"] = "episodes";
    AnimeOrderBy["rating"] = "rating";
})(AnimeOrderBy || (AnimeOrderBy = {}));
var AnimeOrderBy$1 = AnimeOrderBy;

var MangaOrderBy;
(function (MangaOrderBy) {
    MangaOrderBy["title"] = "title";
    MangaOrderBy["start_date"] = "start_date";
    MangaOrderBy["end_date"] = "end_date";
    MangaOrderBy["score"] = "score";
    MangaOrderBy["type"] = "type";
    MangaOrderBy["members"] = "members";
    MangaOrderBy["id"] = "id";
    MangaOrderBy["chapters"] = "chapters";
    MangaOrderBy["volumes"] = "volumes";
})(MangaOrderBy || (MangaOrderBy = {}));
var MangaOrderBy$1 = MangaOrderBy;

var Sort;
(function (Sort) {
    Sort["ascending"] = "ascending";
    Sort["descending"] = "descending";
})(Sort || (Sort = {}));
var Sort$1 = Sort;

var Rating;
(function (Rating) {
    Rating["g"] = "g";
    Rating["ph"] = "pg";
    Rating["pg13"] = "pg13";
    Rating["r17"] = "r17";
    Rating["r"] = "r";
    Rating["rx"] = "rx";
})(Rating || (Rating = {}));
var Rating$1 = Rating;

//
class JikanClient {
    constructor() {
        //Jikan API
        this.anime = anime;
        this.manga = manga;
        this.person = person;
        this.character = character;
        this.search = search;
        this.season = season;
        this.seasonArchive = seasonArchive;
        this.seasonLater = seasonLater;
        this.schedule = schedule;
        this.top = top;
        this.genre = genre;
        this.producer = producer;
        this.magazine = magazine;
        this.user = user;
        this.club = club;
        this.types = {
            AnimeGenre: AnimeGenre$1,
            MangaGenre: MangaGenre$1,
            AnimeType: AnimeType$1,
            MangaType: MangaType$1,
            AnimeStatus: AnimeStatus$1,
            MangaStatus: MangaStatus$1,
            AnimeOrderBy: AnimeOrderBy$1,
            MangaOrderBy: MangaOrderBy$1,
            Sort: Sort$1,
            Rating: Rating$1
        };
    }
}
// import login from "./methods/poly/noApiLogin";
// import notifications from "./methods/poly/loginRequired/notifications";
// import animeEdit from "./methods/poly/loginRequired/animeEdit";
// class ScraperClient {
//   public login = login;
//   public notifications = notifications;
//   public animeEdit = animeEdit;
// }
const Mal = new JikanClient();

// @ts-ignore
globalThis.jikanGet = (url) => esmFetch(url);

export default Mal;
export { JikanClient, Mal };
//# sourceMappingURL=index.js.map
