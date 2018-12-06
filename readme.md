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
Mal.seasonArchive().then(j => {});
Mal.schedule("monday").then(j => {});
Mal.top("anime").then(j => {});
Mal.genre("anime",1,1).then(j => {});
Mal.producer(1,1).then(j => {});

Mal.user("PolyMagic").then(j=>{});
Mal.user("PolyMagic","history").then(j=>{});
Mal.user("PolyMagic","friends",1).then(j=>{});
Mal.user("PolyMagic","animelist","all").then(j=>{});
//All posible /user endpoints https://jikan.docs.apiary.io/#reference/0/user

// Poly's Methods
Mal.avatar("PolyMagic").then(j => {});
Mal.list("PolyMagic").then(j => {}); // Api is down
Mal.animeUpdates("PolyMagic").then(j => {});

// Poly's Methods Created Because Of Dead Api
Mal.days("PolyMagic").then(j => {}); // get days stats without mal api
Mal.days("PolyMagic", "manga").then(j => {});

Mal.login("PolyMagic", "**Pas**").then(log => {}); // login without mal api

Mal.notifications(log); // get user mal notifications

Mal.animeEdit(
  {
    num_watched_episodes: 20,
    anime_id: 24833,
    status: 1
    // csrf_token will be added automaticly, no nedd to add it here
  },
  log // log data returned by Mal.login()
);
```

# Get Notifications Example

```js
async () => {
  const log = await Mal.login("PolyMagic", "**Pas**");

  let notifications = await Mal.notifications(log);

  console.log(notifications);
};
```

[Example Notyfications Response](https://github.com/PolyMagic/node-myanimelist/blob/master/dataExamples/exampleNotyfications.json)

# Reference

```ts
anime(id:Number,[request:String,parameter:Number])
manga(id:Number,[request:String])
person(id:Number,[request:String])
character(id:Number,[request:String])

search(type:String,query:String,[filter:Object]) //filter= {limit: Number, Page: Number}
season(year:Number,season:String)
seasonArchive()
schedule(day:String)
top(type:String,[page:Number,subtype:String])
genre(type:String,[genre_id:Number,page:Number])
producer(producer_id:Number,[page:Number])

user(username:String,[request:String,argument:any,argument2:any])


avatar(name:String)
list(name:String)
animeUpdates(name:String)

days(name:String,[type:String]) //type="anime"/"manga" "anime" by default

login(login: String, password: String)

animeEdit(requestBody,log)
```

# Response Example

[Notifications Response](https://github.com/PolyMagic/node-myanimelist/blob/master/dataExamples/exampleNotyfications.json)

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
