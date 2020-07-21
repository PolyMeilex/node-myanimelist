![NodeMal API Banner](https://i.imgur.com/IcBShyO.png)

# Node-MyAnimeList
Node-MyAnimeList is a small promise based package for downloading information from MyAnimeList.
Node-MyAnimeList is using Jikan.moe API and flew methods created by me specially for this package


## Intellisens Support (Typescript)
![Gif](https://i.imgur.com/J1dUQf2.gif)

# Instalation
## Keep in mind that current npm release is on [master branch](https://github.com/PolyMeilex/node-myanimelist/tree/master)
### So examples from here are ahead of what you can use on npm version
Visit [master branch](https://github.com/PolyMeilex/node-myanimelist/tree/master) or [wiki](https://github.com/PolyMeilex/node-myanimelist/wiki) for proper info

[![NPM](https://nodei.co/npm/node-myanimelist.png)](https://nodei.co/npm/node-myanimelist/)   
<br>
Master branch:
```sh
npm i node-myanimelist
```
Dev branch:
```sh
npm i node-myanimelist@next
```

### Import
```js
const { Mal, Jikan } = require("node-myanimelist");
// Or
import { Mal, Jikan } from 'node-myanimelist';
```
### MalAPI Example
```ts
const mal = Mal.api("6114d00ca681b7701d1e15fe11a4987e" /* app_id */ );

// Unoffical way to login (not recomended)
const acount = await mal.Unstable.login("username","password");

// Offical way to login (recomended)
// import pkceChallenge from "pkce-challenge";
// const pkce = pkceChallenge();

const url = mal.getOAuthUrl(pkce.code_challenge)
// Open returned url, accept oauth and use returned code to authorize
const acount = await mal.authorizationCode(code,pkce.code_challenge);

let search = await mal.manga.search(
   "Sakurasou",
   Mal.Manga.fields()
      .alternativeTitles()
      .startDate()
      .endDate()
      .synopsis()
      .mean()
      .rank()
      .popularity()
      .numListUsers()
      .numScoringUsers()
      .nsfw()
      .genres()
      .createdAt()
      .updatedAt()
      .mediaType()
      .status()
      .myListStatus(
         Mal.Manga.listStatusFields()
            .startDate()
            .finishDate()
            .priority()
            .numTimesReread()
            .rereadValue()
            .tags()
            .comments()
      )
      .numVolumes()
      .numChapters()
      .authors()
).call();

// Alternative if you don't care about choosing fields
let searchIDC = await mal.manga.search(
   "Sakurasou",
   Mal.Manga.fields().all()
).call();
```
# List of functions
For more detalis visit [wiki](https://github.com/PolyMeilex/node-myanimelist/wiki)
* MalApi Methods
	* OAuth PKCE Auth
	* OAuth Login And Passwor Auth (unofficial)
  * Anime
    * Search
    * Details
    * Ranking
    * Seasonal anime
    * Suggested anime
  * Manga
    * Search
    * Details
    * Ranking
  * Forum
    * Boards
    * Topics
    * Topic details 
  * User
    * Info
    * Animelist
    * Mangalist
* JikanApi Methods
	* Jikan.**[anime](https://github.com/PolyMeilex/node-myanimelist/wiki/Anime)**(id)
	* Jikan.**[manga](https://github.com/PolyMeilex/node-myanimelist/wiki/Manga)**(id) 
	* Jikan.**[person](https://github.com/PolyMeilex/node-myanimelist/wiki/Person)**(id) 
	* Jikan.**[character](https://github.com/PolyMeilex/node-myanimelist/wiki/Character)**(id) 
 	* Jikan.**[search](https://github.com/PolyMeilex/node-myanimelist/wiki/Search)**()
 	* Jikan.**[season](https://github.com/PolyMeilex/node-myanimelist/wiki/Season)**(year,season)
 	* Jikan.**[seasonArchive](https://github.com/PolyMeilex/node-myanimelist/wiki/Season)**()
 	* Jikan.**[seasonLater](https://github.com/PolyMeilex/node-myanimelist/wiki/Season)**() 
	* Jikan.**[schedule](https://github.com/PolyMeilex/node-myanimelist/wiki/Schedule)**()
	* Jikan.**[top](https://github.com/PolyMeilex/node-myanimelist/wiki/Top)**()
	* Jikan.**[genre](https://github.com/PolyMeilex/node-myanimelist/wiki/Genre)**()
	* Jikan.**[producer](https://github.com/PolyMeilex/node-myanimelist/wiki/Producer)**(id, page?)
	* Jikan.**[magazine](https://github.com/PolyMeilex/node-myanimelist/wiki/Magazine)**(id, page?)
	* Jikan.**[user](https://github.com/PolyMeilex/node-myanimelist/wiki/User)**(username)
	* Jikan.**[club](https://github.com/PolyMeilex/node-myanimelist/wiki/Club)**(id)

# Buildin Scraper
```js
import { ScraperClient } from "node-myanimelist";
const scraperClient = new ScraperClient();

// Login into Mal acount
let loginData = await scraperClient.login("username","password");

// loginData == {
//   MALSESSIONID: "***",
//   csrf_token: "***"
// };

// Get Mal User Notifications
let notifications = await scraperClient.notifications(loginData);

// Update Episode On Mal
const animeUpdate = {
   num_watched_episodes: 20,
   anime_id: 24833,
   status: 1
};
let res = await scraperClient.animeEdit(loginData,animeUpdate);

```
Notifications response [example](https://github.com/PolyMeilex/node-myanimelist/blob/master/dataExamples/exampleNotyfications.json)
