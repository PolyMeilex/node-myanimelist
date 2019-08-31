const { Mal } = require("../");

const assert = require("assert");

const jikanUrl = "https://api.jikan.moe/v3";

function jikanIt(a, b) {
  return it(b, () => assert.equal(a, b));
}

describe("/anime", () => {
  let anime = Mal.anime(1);
  // Return url instead of calling jikan api
  anime.jikanGet = s => s;

  describe("/", () => {
    jikanIt(anime.info(), `${jikanUrl}/anime/1`);
  });
  describe("/charactersStaff", () => {
    jikanIt(anime.charactersStaff(), `${jikanUrl}/anime/1/characters_staff`);
  });
  describe("/episodes", () => {
    jikanIt(anime.episodes(), `${jikanUrl}/anime/1/episodes`);
    jikanIt(anime.episodes(2), `${jikanUrl}/anime/1/episodes/2`);
  });
  describe("/news", () => {
    jikanIt(anime.news(), `${jikanUrl}/anime/1/news`);
  });
  describe("/pictures", () => {
    jikanIt(anime.pictures(), `${jikanUrl}/anime/1/pictures`);
  });
  describe("/videos", () => {
    jikanIt(anime.videos(), `${jikanUrl}/anime/1/videos`);
  });
  describe("/stats", () => {
    jikanIt(anime.stats(), `${jikanUrl}/anime/1/stats`);
  });
  describe("/forum", () => {
    jikanIt(anime.forum(), `${jikanUrl}/anime/1/forum`);
  });
  describe("/moreinfo", () => {
    jikanIt(anime.moreInfo(), `${jikanUrl}/anime/1/moreinfo`);
  });
  describe("/reviews", () => {
    jikanIt(anime.reviews(), `${jikanUrl}/anime/1/reviews`);
    jikanIt(anime.reviews(2), `${jikanUrl}/anime/1/reviews/2`);
  });
  describe("/recommendations", () => {
    jikanIt(anime.recommendations(), `${jikanUrl}/anime/1/recommendations`);
  });
  describe("/userupdates", () => {
    jikanIt(anime.userUpdates(), `${jikanUrl}/anime/1/userupdates`);
    jikanIt(anime.userUpdates(2), `${jikanUrl}/anime/1/userupdates/2`);
  });
});

describe("/manga", () => {
  let manga = Mal.manga(1);
  // Return url instead of calling jikan api
  manga.jikanGet = s => s;

  describe("/", () => {
    jikanIt(manga.info(), `${jikanUrl}/manga/1`);
  });
  describe("/characters", () => {
    jikanIt(manga.characters(), `${jikanUrl}/manga/1/characters`);
  });
  describe("/news", () => {
    jikanIt(manga.news(), `${jikanUrl}/manga/1/news`);
  });
  describe("/pictures", () => {
    jikanIt(manga.pictures(), `${jikanUrl}/manga/1/pictures`);
  });
  describe("/stats", () => {
    jikanIt(manga.stats(), `${jikanUrl}/manga/1/stats`);
  });
  describe("/forum", () => {
    jikanIt(manga.forum(), `${jikanUrl}/manga/1/forum`);
  });
  describe("/moreinfo", () => {
    jikanIt(manga.moreInfo(), `${jikanUrl}/manga/1/moreinfo`);
  });
  describe("/reviews", () => {
    jikanIt(manga.reviews(), `${jikanUrl}/manga/1/reviews`);
    jikanIt(manga.reviews(2), `${jikanUrl}/manga/1/reviews/2`);
  });
  describe("/recommendations", () => {
    jikanIt(manga.recommendations(), `${jikanUrl}/manga/1/recommendations`);
  });
  describe("/userupdates", () => {
    jikanIt(manga.userUpdates(), `${jikanUrl}/manga/1/userupdates`);
    jikanIt(manga.userUpdates(2), `${jikanUrl}/manga/1/userupdates/2`);
  });
});

describe("/person", () => {
  let person = Mal.person(1);
  // Return url instead of calling jikan api
  person.jikanGet = s => s;

  describe("/", () => {
    jikanIt(person.info(), `${jikanUrl}/person/1`);
  });
  describe("/pictures", () => {
    jikanIt(person.pictures(), `${jikanUrl}/person/1/pictures`);
  });
});

describe("/character", () => {
  let character = Mal.character(1);
  // Return url instead of calling jikan api
  character.jikanGet = s => s;

  describe("/", () => {
    jikanIt(character.info(), `${jikanUrl}/character/1`);
  });
  describe("/pictures", () => {
    jikanIt(character.pictures(), `${jikanUrl}/character/1/pictures`);
  });
});

describe("/search", () => {
  it("UNIMPLEMENTED!", () => assert.equal("UNIMPLEMENTED", "IMPLEMENTED"));
});

describe("/season", () => {
  describe("/2018/winter", () => {
    jikanIt(Mal.season.debug(2018, "winter"), `${jikanUrl}/season/2018/winter`);
  });
  describe("/2019/winter", () => {
    jikanIt(Mal.season.debug(2019, "winter"), `${jikanUrl}/season/2019/winter`);
  });
  describe("/2018/summer", () => {
    jikanIt(Mal.season.debug(2018, "summer"), `${jikanUrl}/season/2018/summer`);
  });
  describe("/2019/summer", () => {
    jikanIt(Mal.season.debug(2019, "summer"), `${jikanUrl}/season/2019/summer`);
  });
});

describe("/season/archive", () => {
  jikanIt(Mal.seasonArchive.debug(), `${jikanUrl}/season/archive`);
});

describe("/season/later", () => {
  jikanIt(Mal.seasonLater.debug(), `${jikanUrl}/season/later`);
});

describe("/schedule", () => {
  let schedule = Mal.schedule();
  // Return url instead of calling jikan api
  schedule.jikanGet = s => s;

  describe("/", () => {
    jikanIt(schedule.all(), `${jikanUrl}/schedule`);
  });
  describe("/monday", () => {
    jikanIt(schedule.monday(), `${jikanUrl}/schedule/monday`);
  });
  describe("/tuesday", () => {
    jikanIt(schedule.tuesday(), `${jikanUrl}/schedule/tuesday`);
  });
  describe("/wednesday", () => {
    jikanIt(schedule.wednesday(), `${jikanUrl}/schedule/wednesday`);
  });
  describe("/thursday", () => {
    jikanIt(schedule.thursday(), `${jikanUrl}/schedule/thursday`);
  });
  describe("/friday", () => {
    jikanIt(schedule.friday(), `${jikanUrl}/schedule/friday`);
  });
  describe("/saturday", () => {
    jikanIt(schedule.saturday(), `${jikanUrl}/schedule/saturday`);
  });
  describe("/sunday", () => {
    jikanIt(schedule.sunday(), `${jikanUrl}/schedule/sunday`);
  });
  describe("/other", () => {
    jikanIt(schedule.other(), `${jikanUrl}/schedule/other`);
  });
  describe("/unknown", () => {
    jikanIt(schedule.unknown(), `${jikanUrl}/schedule/unknown`);
  });
});

describe("/top", () => {
  let top = Mal.top();
  // Return url instead of calling jikan api
  top.jikanGet = s => s;

  describe("/anime", () => {
    let topAnime = top.anime();
    describe("/all", () => {
      jikanIt(topAnime.all(), `${jikanUrl}/top/1`);
      jikanIt(topAnime.all(2), `${jikanUrl}/top/2`);
    });
    describe("/airing", () => {
      jikanIt(topAnime.airing(), `${jikanUrl}/top/1/airing`);
      jikanIt(topAnime.airing(2), `${jikanUrl}/top/2/airing`);
    });
    describe("/upcoming", () => {
      jikanIt(topAnime.upcoming(), `${jikanUrl}/top/1/upcoming`);
      jikanIt(topAnime.upcoming(2), `${jikanUrl}/top/2/upcoming`);
    });
    describe("/tv", () => {
      jikanIt(topAnime.tv(), `${jikanUrl}/top/1/tv`);
      jikanIt(topAnime.tv(2), `${jikanUrl}/top/2/tv`);
    });
    describe("/movie", () => {
      jikanIt(topAnime.movie(), `${jikanUrl}/top/1/movie`);
      jikanIt(topAnime.movie(2), `${jikanUrl}/top/2/movie`);
    });
    describe("/ova", () => {
      jikanIt(topAnime.ova(), `${jikanUrl}/top/1/ova`);
      jikanIt(topAnime.ova(2), `${jikanUrl}/top/2/ova`);
    });
    describe("/special", () => {
      jikanIt(topAnime.special(), `${jikanUrl}/top/1/special`);
      jikanIt(topAnime.special(2), `${jikanUrl}/top/2/special`);
    });
    describe("/bypopularity", () => {
      jikanIt(topAnime.byPopularity(), `${jikanUrl}/top/1/bypopularity`);
      jikanIt(topAnime.byPopularity(2), `${jikanUrl}/top/2/bypopularity`);
    });
    describe("/favorite", () => {
      jikanIt(topAnime.favorite(), `${jikanUrl}/top/1/favorite`);
      jikanIt(topAnime.favorite(2), `${jikanUrl}/top/2/favorite`);
    });
  });
});
