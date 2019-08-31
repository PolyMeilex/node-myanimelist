![NodeMal API Banner](https://i.imgur.com/IcBShyO.png)

# Node-MyAnimeList

Node-MyAnimeList is a small promise based package for downloading information from MyAnimeList.
Node-MyAnimeList is using Jikan.moe API and flew methods created by me specially for this package

## Intellisens Support (Typescript)
![Gif](https://via.placeholder.com/650x350)

# Instalation
[![NPM](https://nodei.co/npm/node-myanimelist.png)](https://nodei.co/npm/node-myanimelist/)

```
npm i node-myanimelist
```
## Responses
Data is always returned with promise.
Data is actually raw [axios](https://www.npmjs.com/package/axios) response object so to get jikanApi json object you have to use:
```ts
	.then(res => res.data) //Data is jikanApi response
```
Jikan methods return unmodified jikanApi responses, to see all of them visit [jikanDocs](https://jikan.docs.apiary.io/)
# Examples
```ts
// "id" is Id of Mal object
// "p" is optional Mal page number of paginated list (usually it starts at 1 not 0)
```
```ts
const { Mal } = require("node-myanimelist");
// Or
import Mal from 'node-myanimelist';
```
```ts
let anime = Mal.anime(id);
anime.info();
anime.charactersStaff();
anime.episodes(p);
anime.news();
anime.pictures();
anime.videos();
anime.stats();
anime.forum();
anime.moreInfo();
anime.reviews(p);
anime.recommendations();
anime.userUpdates(p);
```
```ts
let manga = Mal.manga(id);
manga.info();
manga.characters();
manga.news();
manga.pictures();
manga.stats();
manga.forum();
manga.moreInfo();
manga.reviews(p);
manga.recommendations();
manga.userUpdates(p);
```
```ts
let type = Mal.types.AnimeType.tv;
let genre = Mal.types.AnimeGenre.action;

let search = Mal.search().anime({ q: "Fate", page: 2, type, genre });
//                       .manga({ q: "Fate" });
//                       .person({ q: "Fate" });
//                       .character({ q: "Fate" });
```
If you are not using typescript you can find all search parameters in [jikanDoc](https://jikan.docs.apiary.io/#reference/0/search)
```ts
let schedule = Mal.schedule();
schedule.all();
schedule.monday();
schedule.tuesday();
schedule.wednesday();
schedule.thursday();
schedule.friday();
schedule.saturday();
schedule.sunday();
schedule.other();
schedule.unknown();
```
```ts
let top = Mal.top().anime();
//                 .manga()
//                 .people()
//                 .characters()

// All means "no subtype"
top.all(p);
// Anime Subtypes
top.airing(p);
top.upcoming(p);
top.tv(p);
top.movie(p);
top.ova(p);
top.special(p);
// Manga Subtypes
top.manga(p);
top.novels(p);
top.oneshots(p);
top.doujin(p);
top.manhwa(p);
top.manhua(p);
// Anime & Manga Subtypes
top.byPopularity(p);
top.favorite(p);
```
```ts
Mal.person(id).info();
Mal.person(id).pictures();

Mal.character(id).info();
Mal.character(id).pictures();
```
```ts
Mal.genre().anime(Mal.types.AnimeGenre.Action, p);
//         .manga(Mal.types.MangaGenre.Action,p)
```
```ts
Mal.producer(id, p);
Mal.magazine(id, p);
```
```ts
let club = Mal.club(id);
club.info();
club.members(p);
```
```ts
Mal.season(2018, "winter");
Mal.seasonArchive();
Mal.seasonLater();
```
```ts
let user = Mal.user("username");
user.profile();

user.history().all();
//            .anime()
//            .manga()

user.friends(p);
```
More user list parameters here [jikanDoc](https://jikan.docs.apiary.io/#reference/0/user)
```ts
let params = {
  search: "q",
  sort: "order_by"
};

let animelist = user.animelist(p);
animelist.all(params);
animelist.watching(params);
animelist.onhold(params);
animelist.dropped(params);
animelist.plantowatch(params);

let mangalist = user.mangalist(p);
mangalist.all(params);
mangalist.reading(params);
mangalist.onhold(params);
mangalist.dropped(params);
mangalist.plantoread(params);
```
