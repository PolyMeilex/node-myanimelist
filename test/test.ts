import Mal from "../";

// Return url instead of calling jikan api
// @ts-ignore
global.jikanGet = (s) => s;

const assert = require("assert");

const jikanUrl = "https://api.jikan.moe/v3";

function jikanIt(a, b) {
  return it(b, () => assert.equal(a, b));
}

describe("/anime", () => {
  let anime = Mal.anime(1);

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

  describe("/", () => {
    jikanIt(person.info(), `${jikanUrl}/person/1`);
  });
  describe("/pictures", () => {
    jikanIt(person.pictures(), `${jikanUrl}/person/1/pictures`);
  });
});

describe("/character", () => {
  let character = Mal.character(1);

  describe("/", () => {
    jikanIt(character.info(), `${jikanUrl}/character/1`);
  });
  describe("/pictures", () => {
    jikanIt(character.pictures(), `${jikanUrl}/character/1/pictures`);
  });
});

describe("/search", () => {
  let search = Mal.search();

  describe("/anime", () => {
    jikanIt(search.anime({ q: "fate" }), `${jikanUrl}/search/anime?q=fate`);
    jikanIt(
      search.anime({ q: "fate", page: 2 }),
      `${jikanUrl}/search/anime?q=fate&page=2`
    );
  });
  describe("/manga", () => {
    jikanIt(search.manga({ q: "fate" }), `${jikanUrl}/search/manga?q=fate`);
  });
  describe("/person", () => {
    jikanIt(search.person({ q: "fate" }), `${jikanUrl}/search/person?q=fate`);
  });
  describe("/character", () => {
    jikanIt(
      search.character({ q: "fate" }),
      `${jikanUrl}/search/character?q=fate`
    );
  });
});

describe("/season", () => {
  describe("/2018/winter", () => {
    jikanIt(Mal.season(2018, "winter"), `${jikanUrl}/season/2018/winter`);
  });
  describe("/2019/winter", () => {
    jikanIt(Mal.season(2019, "winter"), `${jikanUrl}/season/2019/winter`);
  });
  describe("/2018/summer", () => {
    jikanIt(Mal.season(2018, "summer"), `${jikanUrl}/season/2018/summer`);
  });
  describe("/2019/summer", () => {
    jikanIt(Mal.season(2019, "summer"), `${jikanUrl}/season/2019/summer`);
  });
});

describe("/season/archive", () => {
  jikanIt(Mal.seasonArchive(), `${jikanUrl}/season/archive`);
});

describe("/season/later", () => {
  jikanIt(Mal.seasonLater(), `${jikanUrl}/season/later`);
});

describe("/schedule", () => {
  let schedule = Mal.schedule();

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

  describe("/anime", () => {
    let topAnime = top.anime();
    describe("/all", () => {
      jikanIt(topAnime.all(), `${jikanUrl}/top/anime/1`);
      jikanIt(topAnime.all(2), `${jikanUrl}/top/anime/2`);
    });
    describe("/airing", () => {
      jikanIt(topAnime.airing(), `${jikanUrl}/top/anime/1/airing`);
      jikanIt(topAnime.airing(2), `${jikanUrl}/top/anime/2/airing`);
    });
    describe("/upcoming", () => {
      jikanIt(topAnime.upcoming(), `${jikanUrl}/top/anime/1/upcoming`);
      jikanIt(topAnime.upcoming(2), `${jikanUrl}/top/anime/2/upcoming`);
    });
    describe("/tv", () => {
      jikanIt(topAnime.tv(), `${jikanUrl}/top/anime/1/tv`);
      jikanIt(topAnime.tv(2), `${jikanUrl}/top/anime/2/tv`);
    });
    describe("/movie", () => {
      jikanIt(topAnime.movie(), `${jikanUrl}/top/anime/1/movie`);
      jikanIt(topAnime.movie(2), `${jikanUrl}/top/anime/2/movie`);
    });
    describe("/ova", () => {
      jikanIt(topAnime.ova(), `${jikanUrl}/top/anime/1/ova`);
      jikanIt(topAnime.ova(2), `${jikanUrl}/top/anime/2/ova`);
    });
    describe("/special", () => {
      jikanIt(topAnime.special(), `${jikanUrl}/top/anime/1/special`);
      jikanIt(topAnime.special(2), `${jikanUrl}/top/anime/2/special`);
    });
    describe("/bypopularity", () => {
      jikanIt(topAnime.byPopularity(), `${jikanUrl}/top/anime/1/bypopularity`);
      jikanIt(topAnime.byPopularity(2), `${jikanUrl}/top/anime/2/bypopularity`);
    });
    describe("/favorite", () => {
      jikanIt(topAnime.favorite(), `${jikanUrl}/top/anime/1/favorite`);
      jikanIt(topAnime.favorite(2), `${jikanUrl}/top/anime/2/favorite`);
    });
  });

  describe("/manga", () => {
    let topManga = top.manga();
    describe("/all", () => {
      jikanIt(topManga.all(), `${jikanUrl}/top/manga/1`);
      jikanIt(topManga.all(2), `${jikanUrl}/top/manga/2`);
    });
    describe("/manga", () => {
      jikanIt(topManga.manga(), `${jikanUrl}/top/manga/1/manga`);
      jikanIt(topManga.manga(2), `${jikanUrl}/top/manga/2/manga`);
    });
    describe("/novels", () => {
      jikanIt(topManga.novels(), `${jikanUrl}/top/manga/1/novels`);
      jikanIt(topManga.novels(2), `${jikanUrl}/top/manga/2/novels`);
    });
    describe("/oneshots", () => {
      jikanIt(topManga.oneshots(), `${jikanUrl}/top/manga/1/oneshots`);
      jikanIt(topManga.oneshots(2), `${jikanUrl}/top/manga/2/oneshots`);
    });
    describe("/doujin", () => {
      jikanIt(topManga.doujin(), `${jikanUrl}/top/manga/1/doujin`);
      jikanIt(topManga.doujin(2), `${jikanUrl}/top/manga/2/doujin`);
    });
    describe("/manhwa", () => {
      jikanIt(topManga.manhwa(), `${jikanUrl}/top/manga/1/manhwa`);
      jikanIt(topManga.manhwa(2), `${jikanUrl}/top/manga/2/manhwa`);
    });
    describe("/special", () => {
      jikanIt(topManga.manhua(), `${jikanUrl}/top/manga/1/manhua`);
      jikanIt(topManga.manhua(2), `${jikanUrl}/top/manga/2/manhua`);
    });
    describe("/bypopularity", () => {
      jikanIt(topManga.byPopularity(), `${jikanUrl}/top/manga/1/bypopularity`);
      jikanIt(topManga.byPopularity(2), `${jikanUrl}/top/manga/2/bypopularity`);
    });
    describe("/favorite", () => {
      jikanIt(topManga.favorite(), `${jikanUrl}/top/manga/1/favorite`);
      jikanIt(topManga.favorite(2), `${jikanUrl}/top/manga/2/favorite`);
    });
  });

  describe("/people", () => {
    let topPeople = top.people();
    describe("/all", () => {
      jikanIt(topPeople.all(), `${jikanUrl}/top/people/1`);
      jikanIt(topPeople.all(2), `${jikanUrl}/top/people/2`);
    });
  });

  describe("/characters", () => {
    let topCharacters = top.characters();
    describe("/all", () => {
      jikanIt(topCharacters.all(), `${jikanUrl}/top/characters/1`);
      jikanIt(topCharacters.all(2), `${jikanUrl}/top/characters/2`);
    });
  });
});

describe("/genre", () => {
  let genre = Mal.genre();

  describe("@deprecated (check backward compatibility)", () => {
    jikanIt(
      genre.anime(Mal.types.AnimeGenre.action),
      `${jikanUrl}/genre/anime/1`
    );
    jikanIt(
      genre.manga(Mal.types.MangaGenre.action),
      `${jikanUrl}/genre/manga/1`
    );
  });

  describe("/anime", () => {
    jikanIt(
      genre.anime(Mal.types.AnimeGenreId.action),
      `${jikanUrl}/genre/anime/1`
    );
    jikanIt(
      genre.anime(Mal.types.AnimeGenreId.action, 1),
      `${jikanUrl}/genre/anime/1/1`
    );
    jikanIt(
      genre.anime(Mal.types.AnimeGenreId.action, 2),
      `${jikanUrl}/genre/anime/1/2`
    );
    jikanIt(
      genre.anime(Mal.types.AnimeGenreId.adventure, 1),
      `${jikanUrl}/genre/anime/2/1`
    );
  });
  describe("/manga", () => {
    jikanIt(
      genre.manga(Mal.types.MangaGenreId.action),
      `${jikanUrl}/genre/manga/1`
    );
    jikanIt(
      genre.manga(Mal.types.MangaGenreId.action, 1),
      `${jikanUrl}/genre/manga/1/1`
    );
    jikanIt(
      genre.manga(Mal.types.MangaGenreId.action, 2),
      `${jikanUrl}/genre/manga/1/2`
    );
    jikanIt(
      genre.manga(Mal.types.MangaGenreId.adventure, 1),
      `${jikanUrl}/genre/manga/2/1`
    );
  });
});

describe("/producer", () => {
  jikanIt(Mal.producer(1), `${jikanUrl}/producer/1`);
  jikanIt(Mal.producer(2), `${jikanUrl}/producer/2`);
  jikanIt(Mal.producer(1, 2), `${jikanUrl}/producer/1/2`);
  jikanIt(Mal.producer(2, 1), `${jikanUrl}/producer/2/1`);
});

describe("/magazine", () => {
  jikanIt(Mal.magazine(1), `${jikanUrl}/magazine/1`);
  jikanIt(Mal.magazine(2), `${jikanUrl}/magazine/2`);
  jikanIt(Mal.magazine(1, 2), `${jikanUrl}/magazine/1/2`);
  jikanIt(Mal.magazine(2, 1), `${jikanUrl}/magazine/2/1`);
});

describe("/user", () => {
  let user = Mal.user("PolyMeilex");

  describe("/profile", () => {
    jikanIt(user.profile(), `${jikanUrl}/user/PolyMeilex/profile`);
  });
  describe("/history", () => {
    jikanIt(user.history().all(), `${jikanUrl}/user/PolyMeilex/history`);
    jikanIt(
      user.history().anime(),
      `${jikanUrl}/user/PolyMeilex/history/anime`
    );
    jikanIt(
      user.history().manga(),
      `${jikanUrl}/user/PolyMeilex/history/manga`
    );
  });
  describe("/friends", () => {
    jikanIt(user.friends(), `${jikanUrl}/user/PolyMeilex/friends`);
    jikanIt(user.friends(2), `${jikanUrl}/user/PolyMeilex/friends/2`);
  });
  describe("/animelist", () => {
    describe("/all", () => {
      jikanIt(
        user.animelist().all(),
        `${jikanUrl}/user/PolyMeilex/animelist/all/1`
      );
      jikanIt(
        user.animelist(2).all(),
        `${jikanUrl}/user/PolyMeilex/animelist/all/2`
      );
    });
    describe("/watching", () => {
      jikanIt(
        user.animelist().watching(),
        `${jikanUrl}/user/PolyMeilex/animelist/watching/1`
      );
      jikanIt(
        user.animelist(2).watching(),
        `${jikanUrl}/user/PolyMeilex/animelist/watching/2`
      );
    });
    describe("/onhold", () => {
      jikanIt(
        user.animelist().onhold(),
        `${jikanUrl}/user/PolyMeilex/animelist/onhold/1`
      );
      jikanIt(
        user.animelist(2).onhold(),
        `${jikanUrl}/user/PolyMeilex/animelist/onhold/2`
      );
    });
    describe("/dropped", () => {
      jikanIt(
        user.animelist().dropped(),
        `${jikanUrl}/user/PolyMeilex/animelist/dropped/1`
      );
      jikanIt(
        user.animelist(2).dropped(),
        `${jikanUrl}/user/PolyMeilex/animelist/dropped/2`
      );
    });
    describe("/plantowatch", () => {
      jikanIt(
        user.animelist().plantowatch(),
        `${jikanUrl}/user/PolyMeilex/animelist/plantowatch/1`
      );
      jikanIt(
        user.animelist(2).plantowatch(),
        `${jikanUrl}/user/PolyMeilex/animelist/plantowatch/2`
      );
    });
  });
  describe("/mangalist", () => {
    describe("/all", () => {
      jikanIt(
        user.mangalist().all(),
        `${jikanUrl}/user/PolyMeilex/mangalist/all/1`
      );
      jikanIt(
        user.mangalist(2).all(),
        `${jikanUrl}/user/PolyMeilex/mangalist/all/2`
      );
    });
    describe("/reading", () => {
      jikanIt(
        user.mangalist().reading(),
        `${jikanUrl}/user/PolyMeilex/mangalist/reading/1`
      );
      jikanIt(
        user.mangalist(2).reading(),
        `${jikanUrl}/user/PolyMeilex/mangalist/reading/2`
      );
    });
    describe("/onhold", () => {
      jikanIt(
        user.mangalist().onhold(),
        `${jikanUrl}/user/PolyMeilex/mangalist/onhold/1`
      );
      jikanIt(
        user.mangalist(2).onhold(),
        `${jikanUrl}/user/PolyMeilex/mangalist/onhold/2`
      );
    });
    describe("/dropped", () => {
      jikanIt(
        user.mangalist().dropped(),
        `${jikanUrl}/user/PolyMeilex/mangalist/dropped/1`
      );
      jikanIt(
        user.mangalist(2).dropped(),
        `${jikanUrl}/user/PolyMeilex/mangalist/dropped/2`
      );
    });
    describe("/plantowatch", () => {
      jikanIt(
        user.mangalist().plantoread(),
        `${jikanUrl}/user/PolyMeilex/mangalist/plantoread/1`
      );
      jikanIt(
        user.mangalist(2).plantoread(),
        `${jikanUrl}/user/PolyMeilex/mangalist/plantoread/2`
      );
    });
  });
});

describe("/club", () => {
  let club = Mal.club(1);

  describe("/", () => {
    jikanIt(club.info(), `${jikanUrl}/club/1`);
  });
  describe("/members", () => {
    jikanIt(club.members(), `${jikanUrl}/club/1/members`);
    jikanIt(club.members(1), `${jikanUrl}/club/1/members/1`);
  });
});
