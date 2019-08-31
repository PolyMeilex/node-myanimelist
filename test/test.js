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
