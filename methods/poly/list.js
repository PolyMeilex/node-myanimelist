module.exports = function (name) {
    var rp = require('request-promise-native');
    var toJson = require('xml2js').parseString;
    var reMap = function (XmlToJson) {
        var myanimelist = XmlToJson.myanimelist;
        var myinfo = myanimelist.myinfo[0];
        var anime = myanimelist.anime;
        var ReMapMyInfo = {
            user_id: myinfo.user_id[0],
            user_name: myinfo.user_name[0],
            user_watching: myinfo.user_watching[0],
            user_completed: myinfo.user_completed[0],
            user_onhold: myinfo.user_onhold[0],
            user_dropped: myinfo.user_dropped[0],
            user_plantowatch: myinfo.user_plantowatch[0],
            user_days_spent_watching: myinfo.user_days_spent_watching[0]
        };
        var ReMapAnime = anime.map(function (e) {
            return {
                series_animedb_id: e.series_animedb_id[0],
                series_title: e.series_title[0],
                series_synonyms: e.series_synonyms[0],
                series_type: e.series_type[0],
                series_episodes: e.series_episodes[0],
                series_status: e.series_status[0],
                series_start: e.series_start[0],
                series_end: e.series_end[0],
                series_image: e.series_image[0],
                my_id: e.my_id[0],
                my_watched_episodes: e.my_watched_episodes[0],
                my_start_date: e.my_start_date[0],
                my_finish_date: e.my_finish_date[0],
                my_score: e.my_score[0],
                my_status: e.my_status[0],
                my_rewatching: e.my_rewatching[0],
                my_rewatching_ep: e.my_rewatching_ep[0],
                my_last_updated: e.my_last_updated[0],
                my_tags: e.my_tags[0]
            };
        });
        return {
            myinfo: ReMapMyInfo,
            anime: ReMapAnime
        };
    };
    return new Promise(function (res, rej) {
        rp("https://myanimelist.net/malappinfo.php?u=" + name)
            .then(function (res) {
            return new Promise(function (xmlRes, xmlRej) {
                toJson(res, function (err, json) {
                    if (err)
                        rej('Error');
                    else
                        xmlRes(json);
                });
            });
        })
            .then(function (json) {
            if (json.myanimelist.myinfo)
                return reMap(json);
            else
                rej("User Not Found");
        })
            .then(function (json) { return res(json); })
            .catch(function (err) { return rej("Error"); });
    });
};
