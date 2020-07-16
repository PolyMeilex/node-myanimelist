![NodeMal API Banner](https://i.imgur.com/IcBShyO.png)

# Node-MyAnimeList
### Oficial MAL API support is WIP! :smiley:
#### Todo:
- [x] Auth
- [x] /user
  - [x] info
  - [x] animelist
  - [x] mangalist
- [x] /anime
  - [x] search 
  - [x] details
  - [x] ranking
  - [x] seasonal
  - [x] suggested  
  - [x] update anime
  - [x] delete anime
- [ ] /forum
  - [ ] boards
  - [ ] topic detail
  - [ ] topics
- [x] /manga
  - [x] search 
    - [x] Unit Tests
  - [x] details
  - [x] ranking  
  - [x] update manga
  - [x] delete manga


Node-MyAnimeList is a small promise based package for downloading information from MyAnimeList.
Node-MyAnimeList is using Jikan.moe API and flew methods created by me specially for this package


## Intellisens Support (Typescript)
![Gif](https://i.imgur.com/J1dUQf2.gif)

# Instalation
## Keep in mind that current npm release is on [master branch](https://github.com/PolyMeilex/node-myanimelist/tree/master)
### So examples from here are ahead of what you can use on npm version
Visit [master branch](https://github.com/PolyMeilex/node-myanimelist/tree/master) or [wiki](https://github.com/PolyMeilex/node-myanimelist/wiki) for proper info

[![NPM](https://nodei.co/npm/node-myanimelist.png)](https://nodei.co/npm/node-myanimelist/)

```
npm i node-myanimelist
```
### Import
```js
const { Mal, Jikan } = require("node-myanimelist");
// Or
import { Mal, Jikan } from 'node-myanimelist';
```
## Responses
Data is always returned with promise.
Data is actually raw [axios](https://www.npmjs.com/package/axios) response object so to get jikanApi json object you have to use:
```ts
	.then(res => res.data) //Data is jikanApi response
```
Jikan methods return unmodified jikanApi responses, to see all of them visit [jikanDocs](https://jikan.docs.apiary.io/)
# List of functions
For more detalis visit [wiki](https://github.com/PolyMeilex/node-myanimelist/wiki)
* MalApi Methods
  * WIP!
* JikanApi Methods
	* Jikan.**[anime](https://github.com/PolyMeilex/node-myanimelist/wiki/Anime)**(id)
		* anime.**info**()
 		* [List of all endpoints](https://github.com/PolyMeilex/node-myanimelist/wiki/Anime)
	* Jikan.**[manga](https://github.com/PolyMeilex/node-myanimelist/wiki/Manga)**(id) 
 		* manga.**info**()
 		* [List of all endpoints](https://github.com/PolyMeilex/node-myanimelist/wiki/Manga)
	* Jikan.**[person](https://github.com/PolyMeilex/node-myanimelist/wiki/Person)**(id) 
		* person.**info**()
		* person.**pictures**()
	* Jikan.**[character](https://github.com/PolyMeilex/node-myanimelist/wiki/Character)**(id) 
		* character.**info**()
	 	* character.**pictures**()
 	* Jikan.**[search](https://github.com/PolyMeilex/node-myanimelist/wiki/Search)**()
	 	* search.**anime**(params)
	 	* search.**manga**(params)
	 	* search.**person**(params)
	 	* search.**character**(params)
 	* Jikan.**[season](https://github.com/PolyMeilex/node-myanimelist/wiki/Season)**(year,season)
 	* Jikan.**[seasonArchive](https://github.com/PolyMeilex/node-myanimelist/wiki/Season)**()
 	* Jikan.**[seasonLater](https://github.com/PolyMeilex/node-myanimelist/wiki/Season)**() 
	* Jikan.**[schedule](https://github.com/PolyMeilex/node-myanimelist/wiki/Schedule)**()
		* schedule.**all**()
		* schedule.**monday**()
		* [List of all endpoints](https://github.com/PolyMeilex/node-myanimelist/wiki/Schedule)
	* Jikan.**[top](https://github.com/PolyMeilex/node-myanimelist/wiki/Top)**()
		* top.**anime**()
			* topAnime.**all**()
			* topAnime.**upcoming**()
 		* [List of all endpoints](https://github.com/PolyMeilex/node-myanimelist/wiki/Top)
	* Jikan.**[genre](https://github.com/PolyMeilex/node-myanimelist/wiki/Genre)**()
		* genre.**anime**(genreId)
		* genre.**manga**(genreId)
	* Jikan.**[producer](https://github.com/PolyMeilex/node-myanimelist/wiki/Producer)**(id, page?)
	* Jikan.**[magazine](https://github.com/PolyMeilex/node-myanimelist/wiki/Magazine)**(id, page?)
	* Jikan.**[user](https://github.com/PolyMeilex/node-myanimelist/wiki/User)**(username)
		* user.**profile**()
		* user.**history**()
			* history.**all**()
			* history.**anime**()
 			* history.**manga**()
		* user.**animelist**(page?)
			* animelist.**all**(params?)
 			* animelist.**watching**(params?)
		* user.**mangalist**(page?)
			* mangalist.**all**(params?)
 			* mangalist.**reading**(params?)
 		* [List of all endpoints](https://github.com/PolyMeilex/node-myanimelist/wiki/User)
	* Jikan.**[club](https://github.com/PolyMeilex/node-myanimelist/wiki/Club)**(id)
		* club.**info**()
		* club.**members**(page?)

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
