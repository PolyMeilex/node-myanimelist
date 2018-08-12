import Mal from "../";

(async () => {
  const log = await Mal.login("PolyMagic", "**Pas**");

  //   let notyfications = await Mal.notyfications(log);
  Mal.animeEdit(
    {
      num_watched_episodes: 20,
      anime_id: 24833,
      status: 1
    },
    log
  );

  //   console.log(notyfications);
})();
