![matomari API Banner](https://i.imgur.com/IcBShyO.png)

# Mal.JS
Mal.Js is a small promise based package for downloading information from MyAnimeList.
Mal.Js is using Jikan.moe API and flew methods created by me specially for this package 

# Instalation
```
npm i node-myanimelist
```
# Examples
```js
import  Mal  from  'node-myanimelist';

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
