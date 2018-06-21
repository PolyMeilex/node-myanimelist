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


const Mal = require('node-myanimelist').default;
// Or
// import  Mal  from  'node-myanimelist';

// Jikan Methods
Mal.anime(1).then( j  =>  console.log(j));
Mal.manga(1).then( j  =>  console.log(j));
Mal.person(1).then( j  =>  console.log(j));
Mal.character(1).then( j  =>  console.log(j));

Mal.search('anime', 'gears').then( j  =>  console.log(j));
Mal.season(2018, 'winter').then( j  =>  console.log(j));
Mal.schedule('monday').then( j  =>  console.log(j));
Mal.top('anime').then( j  =>  console.log(j));

// Other
Mal.avatar('PolyMagic').then( j  =>  console.log(j));
Mal.list('PolyMagic').then( j  =>  console.log(j));
Mal.animeUpdates('PolyMagic').then( j  =>  console.log(j));
```
# Reference
```ts
anime(id:Number,[request:String,parameter:Number])
manga(id:Number,[request:String])
person(id:Number,[request:String])
character(id:Number,[request:String])

search(type:String,query:String,[page:Number])
season(year:Number,season:String)
schedule(day:String)
top(type:String,[page:Number,subtype:String])

avatar(name:String)
list(name:String)
animeUpdates(name:String)
```


# Response Example

```ts
avatar(name) ----> Url:String

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
    ep:Number;
    score:Number;
    img:String;
    date:String;
    color:Number;
}
```

Jikan methods return same values as described on jikan.docs.apiary.io
