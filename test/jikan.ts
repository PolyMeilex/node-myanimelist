import Mal, { Jikan4 as Jikan } from "../";
import axios from "axios";

// Return url instead of calling jikan api
// @ts-ignore
global.__jikanGet = (s) => s;

const assert = require("assert");

const jikanUrl = "https://api.jikan.moe/v4";

function jikanIt(a, b) {
  return it(b, () => assert.equal(a, b));
}

describe("/anime", () => {
  let anime = Jikan.anime(1);

  describe("/", () => {
    jikanIt(anime.info(), `${jikanUrl}/anime/1`);
  });
  describe("/characters", () => {
    jikanIt(anime.characters(), `${jikanUrl}/anime/1/characters`);
  });
  describe("/staff", () => {
    jikanIt(anime.staff(), `${jikanUrl}/anime/1/staff`);
  });
  describe("/episodes", () => {
    jikanIt(anime.episodes(), `${jikanUrl}/anime/1/episodes`);
    jikanIt(anime.episodes({ page: 2 }), `${jikanUrl}/anime/1/episodes?page=2`);
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
    jikanIt(anime.statistics(), `${jikanUrl}/anime/1/statistics`);
  });
  describe("/forum", () => {
    jikanIt(anime.forum(), `${jikanUrl}/anime/1/forum`);
  });
  describe("/moreinfo", () => {
    jikanIt(anime.moreInfo(), `${jikanUrl}/anime/1/moreinfo`);
  });
  describe("/reviews", () => {
    jikanIt(anime.reviews(), `${jikanUrl}/anime/1/reviews`);
    jikanIt(anime.reviews({ page: 2 }), `${jikanUrl}/anime/1/reviews?page=2`);
  });
  describe("/recommendations", () => {
    jikanIt(anime.recommendations(), `${jikanUrl}/anime/1/recommendations`);
  });
  describe("/userupdates", () => {
    jikanIt(anime.userUpdates(), `${jikanUrl}/anime/1/userupdates`);
    jikanIt(
      anime.userUpdates({ page: 2 }),
      `${jikanUrl}/anime/1/userupdates?page=2`
    );
  });
});

describe("/manga", () => {
  let manga = Jikan.manga(1);

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
  describe("/statistics", () => {
    jikanIt(manga.statistics(), `${jikanUrl}/manga/1/statistics`);
  });
  describe("/forum", () => {
    jikanIt(manga.forum(), `${jikanUrl}/manga/1/forum`);
  });
  describe("/moreinfo", () => {
    jikanIt(manga.moreInfo(), `${jikanUrl}/manga/1/moreinfo`);
  });
  describe("/reviews", () => {
    jikanIt(manga.reviews(), `${jikanUrl}/manga/1/reviews`);
    jikanIt(manga.reviews({ page: 2 }), `${jikanUrl}/manga/1/reviews?page=2`);
  });
  describe("/recommendations", () => {
    jikanIt(manga.recommendations(), `${jikanUrl}/manga/1/recommendations`);
  });
  describe("/userupdates", () => {
    jikanIt(manga.userUpdates(), `${jikanUrl}/manga/1/userupdates`);
    jikanIt(
      manga.userUpdates({ page: 2 }),
      `${jikanUrl}/manga/1/userupdates?page=2`
    );
  });
});

describe("/people", () => {
  let person = Jikan.person(1);

  describe("/", () => {
    jikanIt(person.info(), `${jikanUrl}/people/1`);
  });
  describe("/pictures", () => {
    jikanIt(person.pictures(), `${jikanUrl}/people/1/pictures`);
  });
});

describe("/characters", () => {
  let character = Jikan.character(1);

  describe("/", () => {
    jikanIt(character.info(), `${jikanUrl}/characters/1`);
  });
  describe("/pictures", () => {
    jikanIt(character.pictures(), `${jikanUrl}/characters/1/pictures`);
  });
});

describe("search", () => {
  describe("/anime", () => {
    jikanIt(Jikan.animeSearch({ q: "fate" }), `${jikanUrl}/anime?q=fate`);
    jikanIt(
      Jikan.animeSearch({ q: "fate", page: 2 }),
      `${jikanUrl}/anime?q=fate&page=2`
    );
    jikanIt(
      Jikan.animeSearch({
        q: "fate",
        page: 2,
        genres: "1",
      }),
      `${jikanUrl}/anime?q=fate&page=2&genres=1`
    );
  });
  describe("/manga", () => {
    jikanIt(Jikan.mangaSearch({ q: "fate" }), `${jikanUrl}/manga?q=fate`);
  });
  describe("/people", () => {
    jikanIt(Jikan.personSearch({ q: "fate" }), `${jikanUrl}/people?q=fate`);
  });
  describe("/characters", () => {
    jikanIt(
      Jikan.characterSearch({ q: "fate" }),
      `${jikanUrl}/characters?q=fate`
    );
  });
});

describe("/seasons", () => {
  describe("/2018/winter", () => {
    jikanIt(Jikan.season(2018, "winter"), `${jikanUrl}/seasons/2018/winter`);
  });
  describe("/2019/winter", () => {
    jikanIt(Jikan.season(2019, "winter"), `${jikanUrl}/seasons/2019/winter`);
  });
  describe("/2018/summer", () => {
    jikanIt(Jikan.season(2018, "summer"), `${jikanUrl}/seasons/2018/summer`);
  });
  describe("/2019/summer", () => {
    jikanIt(Jikan.season(2019, "summer"), `${jikanUrl}/seasons/2019/summer`);
  });
});

describe("/seasons/upcoming", () => {
  jikanIt(Jikan.seasonUpcoming(), `${jikanUrl}/seasons/upcoming`);
});

describe("/schedule", () => {
  jikanIt(Jikan.schedules(), `${jikanUrl}/schedules`);
  jikanIt(
    Jikan.schedules({ filter: "monday" }),
    `${jikanUrl}/schedules?filter=monday`
  );
});

describe("/top", () => {
  describe("/anime", () => {
    jikanIt(Jikan.topAnime(), `${jikanUrl}/top/anime`);
    jikanIt(Jikan.topAnime({ page: 2 }), `${jikanUrl}/top/anime?page=2`);
  });

  describe("/manga", () => {
    jikanIt(Jikan.topManga(), `${jikanUrl}/top/manga`);
    jikanIt(Jikan.topManga({ page: 2 }), `${jikanUrl}/top/manga?page=2`);
  });

  describe("/people", () => {
    jikanIt(Jikan.topPeople(), `${jikanUrl}/top/people`);
    jikanIt(Jikan.topPeople({ page: 2 }), `${jikanUrl}/top/people?page=2`);
  });

  describe("/characters", () => {
    jikanIt(Jikan.topCharacters(), `${jikanUrl}/top/characters`);
    jikanIt(
      Jikan.topCharacters({ page: 2 }),
      `${jikanUrl}/top/characters?page=2`
    );
  });
});

describe("/genres", () => {
  describe("/anime", () => {
    jikanIt(Jikan.animeGenres(), `${jikanUrl}/genres/anime`);
  });
  describe("/manga", () => {
    jikanIt(Jikan.mangaGenres(), `${jikanUrl}/genres/manga`);
  });
});

describe("/producers", () => {
  jikanIt(Jikan.producers(), `${jikanUrl}/producers`);
});

describe("/magazines", () => {
  jikanIt(Jikan.magazines(), `${jikanUrl}/magazines`);
});

// describe("/user", () => {
//   let user = Jikan.user("PolyMeilex");

//   describe("/profile", () => {
//     jikanIt(user.profile(), `${jikanUrl}/user/PolyMeilex/profile`);
//   });
//   describe("/history", () => {
//     jikanIt(user.history().all(), `${jikanUrl}/user/PolyMeilex/history`);
//     jikanIt(
//       user.history().anime(),
//       `${jikanUrl}/user/PolyMeilex/history/anime`
//     );
//     jikanIt(
//       user.history().manga(),
//       `${jikanUrl}/user/PolyMeilex/history/manga`
//     );
//   });
//   describe("/friends", () => {
//     jikanIt(user.friends(), `${jikanUrl}/user/PolyMeilex/friends`);
//     jikanIt(user.friends(2), `${jikanUrl}/user/PolyMeilex/friends/2`);
//   });
//   describe("/animelist", () => {
//     describe("/all", () => {
//       jikanIt(
//         user.animelist().all(),
//         `${jikanUrl}/user/PolyMeilex/animelist/all/1`
//       );
//       jikanIt(
//         user.animelist(2).all(),
//         `${jikanUrl}/user/PolyMeilex/animelist/all/2`
//       );
//     });
//     describe("/watching", () => {
//       jikanIt(
//         user.animelist().watching(),
//         `${jikanUrl}/user/PolyMeilex/animelist/watching/1`
//       );
//       jikanIt(
//         user.animelist(2).watching(),
//         `${jikanUrl}/user/PolyMeilex/animelist/watching/2`
//       );
//     });
//     describe("/onhold", () => {
//       jikanIt(
//         user.animelist().onhold(),
//         `${jikanUrl}/user/PolyMeilex/animelist/onhold/1`
//       );
//       jikanIt(
//         user.animelist(2).onhold(),
//         `${jikanUrl}/user/PolyMeilex/animelist/onhold/2`
//       );
//     });
//     describe("/dropped", () => {
//       jikanIt(
//         user.animelist().dropped(),
//         `${jikanUrl}/user/PolyMeilex/animelist/dropped/1`
//       );
//       jikanIt(
//         user.animelist(2).dropped(),
//         `${jikanUrl}/user/PolyMeilex/animelist/dropped/2`
//       );
//     });
//     describe("/plantowatch", () => {
//       jikanIt(
//         user.animelist().plantowatch(),
//         `${jikanUrl}/user/PolyMeilex/animelist/plantowatch/1`
//       );
//       jikanIt(
//         user.animelist(2).plantowatch(),
//         `${jikanUrl}/user/PolyMeilex/animelist/plantowatch/2`
//       );
//     });
//   });
//   describe("/mangalist", () => {
//     describe("/all", () => {
//       jikanIt(
//         user.mangalist().all(),
//         `${jikanUrl}/user/PolyMeilex/mangalist/all/1`
//       );
//       jikanIt(
//         user.mangalist(2).all(),
//         `${jikanUrl}/user/PolyMeilex/mangalist/all/2`
//       );
//     });
//     describe("/reading", () => {
//       jikanIt(
//         user.mangalist().reading(),
//         `${jikanUrl}/user/PolyMeilex/mangalist/reading/1`
//       );
//       jikanIt(
//         user.mangalist(2).reading(),
//         `${jikanUrl}/user/PolyMeilex/mangalist/reading/2`
//       );
//     });
//     describe("/onhold", () => {
//       jikanIt(
//         user.mangalist().onhold(),
//         `${jikanUrl}/user/PolyMeilex/mangalist/onhold/1`
//       );
//       jikanIt(
//         user.mangalist(2).onhold(),
//         `${jikanUrl}/user/PolyMeilex/mangalist/onhold/2`
//       );
//     });
//     describe("/dropped", () => {
//       jikanIt(
//         user.mangalist().dropped(),
//         `${jikanUrl}/user/PolyMeilex/mangalist/dropped/1`
//       );
//       jikanIt(
//         user.mangalist(2).dropped(),
//         `${jikanUrl}/user/PolyMeilex/mangalist/dropped/2`
//       );
//     });
//     describe("/plantowatch", () => {
//       jikanIt(
//         user.mangalist().plantoread(),
//         `${jikanUrl}/user/PolyMeilex/mangalist/plantoread/1`
//       );
//       jikanIt(
//         user.mangalist(2).plantoread(),
//         `${jikanUrl}/user/PolyMeilex/mangalist/plantoread/2`
//       );
//     });
//   });
// });

describe("/club", () => {
  let club = Jikan.club(1);

  describe("/", () => {
    jikanIt(club.info(), `${jikanUrl}/clubs/1`);
  });
  describe("/members", () => {
    jikanIt(club.members(), `${jikanUrl}/clubs/1/members`);
    jikanIt(club.members({ page: 2 }), `${jikanUrl}/clubs/1/members?page=2`);
  });
});

describe("/random", () => {
  describe("/anime", () => {
    jikanIt(Jikan.randomAnime(), `${jikanUrl}/random/anime`);
  });
  describe("/manga", () => {
    jikanIt(Jikan.randomManga(), `${jikanUrl}/random/manga`);
  });
  describe("/characters", () => {
    jikanIt(Jikan.randomCharacters(), `${jikanUrl}/random/characters`);
  });
  describe("/people", () => {
    jikanIt(Jikan.randomPerson(), `${jikanUrl}/random/people`);
  });
  describe("/users", () => {
    jikanIt(Jikan.randomUser(), `${jikanUrl}/random/users`);
  });
});
