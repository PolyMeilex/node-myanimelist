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
### Import
```js
const { Mal } = require("node-myanimelist");
// Or
import Mal from 'node-myanimelist';
```
## Responses
Data is always returned with promise.
Data is actually raw [axios](https://www.npmjs.com/package/axios) response object so to get jikanApi json object you have to use:
```ts
	.then(res => res.data) //Data is jikanApi response
```
Jikan methods return unmodified jikanApi responses, to see all of them visit [jikanDocs](https://jikan.docs.apiary.io/)
# List of functions
* JikanApi Methods
	* Mal.**[anime](https://github.com/PolyMeilex/node-myanimelist/wiki/Anime)**(id)
		* anime.**info**()
 		* [List of all endpoints](https://github.com/PolyMeilex/node-myanimelist/wiki/Anime)
	* Mal.**[manga](https://github.com/PolyMeilex/node-myanimelist/wiki/Manga)**(id) 
 		* manga.**info**()
 		* [List of all endpoints](https://github.com/PolyMeilex/node-myanimelist/wiki/Manga)
	* Mal.**[person](https://github.com/PolyMeilex/node-myanimelist/wiki/Person)**(id) 
		* person.**info**()
		* person.**pictures**()
	* Mal.**[character](https://github.com/PolyMeilex/node-myanimelist/wiki/Character)**(id) 
		* character.**info**()
	 	* character.**pictures**()
 	* Mal.**[search](https://github.com/PolyMeilex/node-myanimelist/wiki/Search)**()
	 	* search.**anime**(params)
	 	* search.**manga**(params)
	 	* search.**person**(params)
	 	* search.**character**(params)
 	* Mal.**[season](https://github.com/PolyMeilex/node-myanimelist/wiki/Season)**(year,season)
 	* Mal.**[seasonArchive](https://github.com/PolyMeilex/node-myanimelist/wiki/Season)**()
 	* Mal.**[seasonLater](https://github.com/PolyMeilex/node-myanimelist/wiki/Season)**() 
	* Mal.**[schedule](https://github.com/PolyMeilex/node-myanimelist/wiki/Schedule)**()
		* schedule.**all**()
		* schedule.**monday**()
		* [List of all endpoints](https://github.com/PolyMeilex/node-myanimelist/wiki/Schedule)
	* Mal.**[top](https://github.com/PolyMeilex/node-myanimelist/wiki/Top)**()
		* top.**anime**()
			* topAnime.**all**()
			* topAnime.**upcoming**()
 		* [List of all endpoints](https://github.com/PolyMeilex/node-myanimelist/wiki/Top)
	* Mal.**[genre](https://github.com/PolyMeilex/node-myanimelist/wiki/Genre)**()
		* genre.**anime**(genreId)
		* genre.**manga**(genreId)
	* Mal.**[producer](https://github.com/PolyMeilex/node-myanimelist/wiki/Producer)**(id, page?)
	* Mal.**[magazine](https://github.com/PolyMeilex/node-myanimelist/wiki/Magazine)**(id, page?)
	* Mal.**[user](https://github.com/PolyMeilex/node-myanimelist/wiki/User)**(username)
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
	* Mal.**[club](https://github.com/PolyMeilex/node-myanimelist/wiki/Club)**(id)
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
