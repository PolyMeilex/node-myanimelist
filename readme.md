![NodeMal API Banner](https://i.imgur.com/IcBShyO.png)

# Node-MyAnimeList
Node-MyAnimeList is a small promise based package for downloading information from MyAnimeList.
Node-MyAnimeList is using Jikan.moe API and flew methods created by me specially for this package

## Intellisens Support (Typescript)
![Gif](https://i.imgur.com/J1dUQf2.gif)

# Instalation
[![NPM](https://nodei.co/npm/node-myanimelist.png)](https://nodei.co/npm/node-myanimelist/)
```sh
npm i node-myanimelist
```

### Import
```js
const { Mal, Jikan } = require("node-myanimelist");
// Or
import { Mal, Jikan } from 'node-myanimelist';
```
### MalAPI Example
```ts
const auth = Mal.auth("6114d00ca681b7701d1e15fe11a4987e" /* app_id */ );

// Unoffical way to login (not recomended)
const acount = await auth.Unstable.login("username","password");

// Offical way to login (recomended)
// import pkceChallenge from "pkce-challenge";
// const pkce = pkceChallenge();

const url = auth.getOAuthUrl(pkce.code_challenge)
// Open returned url, accept oauth and use returned code to authorize
const acount = await auth.authorizeWithCode(code,pkce.code_challenge);

let search = await acount.manga.search(
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
let searchIDC = await acount.manga.search(
   "Sakurasou",
   Mal.Manga.fields().all()
).call();
```
# List of functions
For more detalis visit [doc](https://polymeilex.github.io/node-myanimelist/)
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
	* Jikan.**[anime](https://polymeilex.github.io/node-myanimelist/modules/_jikan_index_.html)**(id)
	* Jikan.**[manga](https://polymeilex.github.io/node-myanimelist/modules/_jikan_index_.html)**(id) 
	* Jikan.**[person](https://polymeilex.github.io/node-myanimelist/modules/_jikan_index_.html)**(id) 
	* Jikan.**[character](https://polymeilex.github.io/node-myanimelist/modules/_jikan_index_.html)**(id) 
 	* Jikan.**[search](https://polymeilex.github.io/node-myanimelist/modules/_jikan_index_.html)**()
 	* Jikan.**[season](https://polymeilex.github.io/node-myanimelist/modules/_jikan_index_.html)**(year,season)
 	* Jikan.**[seasonArchive](https://polymeilex.github.io/node-myanimelist/modules/_jikan_index_.html)**()
 	* Jikan.**[seasonLater](https://polymeilex.github.io/node-myanimelist/modules/_jikan_index_.html)**() 
	* Jikan.**[schedule](https://polymeilex.github.io/node-myanimelist/modules/_jikan_index_.html)**()
	* Jikan.**[top](https://polymeilex.github.io/node-myanimelist/modules/_jikan_index_.html)**()
	* Jikan.**[genre](https://polymeilex.github.io/node-myanimelist/modules/_jikan_index_.html)**()
	* Jikan.**[producer](https://polymeilex.github.io/node-myanimelist/modules/_jikan_index_.html)**(id, page?)
	* Jikan.**[magazine](https://polymeilex.github.io/node-myanimelist/modules/_jikan_index_.html)**(id, page?)
	* Jikan.**[user](https://polymeilex.github.io/node-myanimelist/modules/_jikan_index_.html)**(username)
	* Jikan.**[club](https://polymeilex.github.io/node-myanimelist/modules/_jikan_index_.html)**(id)