![NodeMal API Banner](https://i.imgur.com/IcBShyO.png)

# Node-MyAnimeList

Node-MyAnimeList is a small promise based package for downloading information from MyAnimeList.
Node-MyAnimeList is using Jikan.moe API and flew methods created by me specially for this package

# Instalation

```
npm i node-myanimelist
```

# Examples

```js
const Mal = require("node-myanimelist");
// Or
// import  Mal  from  'node-myanimelist';

// Jikan Methods
Mal.anime(1).then(j => {});
Mal.manga(1).then(j => {});
Mal.person(1).then(j => {});
Mal.character(1).then(j => {});

Mal.search("anime", "gears").then(j => {});
Mal.season(2018, "winter").then(j => {});
Mal.schedule("monday").then(j => {});
Mal.top("anime").then(j => {});

// Poly's Methods
Mal.avatar("PolyMagic").then(j => {});
Mal.list("PolyMagic").then(j => {}); // Api is down
Mal.animeUpdates("PolyMagic").then(j => {});

// Poly's Methods Created Because Of Dead Api
Mal.days("PolyMagic").then(j => {}); // get days stats without mal api
Mal.days("PolyMagic", "manga").then(j => {});

Mal.login("PolyMagic", "**Pas**").then(log => {}); // login without mal api

Mal.notyfications(log); // get user mal notyfications
```

# Get Notyfications Example

```js
async () => {
  const log = await Mal.login("PolyMagic", "**Pas**");

  let notyfications = await Mal.notyfications(log);

  console.log(notyfications);
};
```

[Example Notyfications Response](https://github.com/PolyMagic/node-myanimelist/blob/master/dataExamples/exampleNotyfications.json)

# Reference

```ts
anime(id:number,[request:string,parameter:number])
manga(id:number,[request:string])
person(id:number,[request:string])
character(id:number,[request:string])

search(type:string,query:string,[page:number])
season(year:number,season:string)
schedule(day:string)
top(type:string,[page:number,subtype:string])

avatar(name:string)
list(name:string)
animeUpdates(name:string)

days(name:string,[type:string]) //type="anime"/"manga" "anime" by default

login(login: string, password: string)
```

# Response Example

[Notyfications Response](https://github.com/PolyMagic/node-myanimelist/blob/master/dataExamples/exampleNotyfications.json)

```ts
avatar(name) ----> Url:string
days(name,type) ----> DaysSpendWatching:number

login() --->
interface LoginData {
  MALSESSIONID: string;
  csrf_token: string;
}

list(name) --->
interface ListsOBJ {
    myinfo:{
        user_id:string;
        user_name: string;
        user_watching: string;
        user_completed: string;
        user_onhold: string;
        user_dropped: string;
        user_plantowatch: string;
        user_days_spent_watching: string;
    };
    anime:[{
        series_animedb_id: string;
        series_title: string;
        series_synonyms:string;
        series_type:string;
        series_episodes: string;
        series_status: string;
        series_start: string;
        series_end: string;
        series_image: string;
        my_id: string;
        my_watched_episodes:string;
        my_start_date: string;
        my_finish_date: string;
        my_score: string;
        my_status: string;
        my_rewatching:string;
        my_rewatching_ep:string;
        my_last_updated:string;
        my_tags: string;
    }]
}

animeUpdates(name) --->
interface animeUpdatesOBJ {
    title: string;
    link: string;
    ep:number;
    score:number;
    img:string;
    date:string;
    color:number;
}
```

Jikan methods return same values as described on [jikan.docs.apiary.io](https://jikan.docs.apiary.io/)
