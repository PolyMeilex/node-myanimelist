"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("../");
__1.default.search("anime", "sao", { limit: 1, page: 2 }).then(function (a) { return console.log(a); });
// (async () => {
//   const log = await Mal.login("PolyMagic", "**Pas**");
//   //   let notyfications = await Mal.notyfications(log);
//   Mal.animeEdit(
//     {
//       num_watched_episodes: 20,
//       anime_id: 24833,
//       status: 1
//     },
//     log
//   );
//   //   console.log(notyfications);
// })();
// Mal.seasonArchive().then(j => console.log(JSON.stringify(j)))
// Mal.genre("anime",1,1).then(j => console.log(JSON.stringify(j)))
// Mal.producer(1,1).then(j => console.log(JSON.stringify(j)))
// Mal.user("PolyMagic","friends",1).then(j=> console.log(JSON.stringify(j)))
// Mal.user("PolyMagic","animelist","all",2).then(j=> console.log(JSON.stringify(j)))
