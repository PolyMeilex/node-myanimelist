// "id" is Id of Mal object
// "p" is optional Mal page number of paginated list

let anime = Mal.anime(id)
anime.info()
anime.charactersStaff()
anime.episodes(p)
anime.news()
anime.pictures()
anime.videos()
anime.stats()
anime.forum()
anime.moreInfo()
anime.reviews(p)
anime.recommendations()
anime.userUpdates(p)

let manga = Mal.manga(id)
manga.info()
manga.characters()
manga.news()
manga.pictures()
manga.stats()
manga.forum()
manga.moreInfo()
manga.reviews(p)
manga.recommendations()
manga.userUpdates(p)

Mal.person(id).info()
Mal.person(id).pictures()

Mal.character(id).info()
Mal.character(id).pictures()

let search = Mal.search().anime()
//                       .manga()
//                       .person()
//                       .character()

search.parameters({ q: "Fate" })

Mal.season(2018, "winter")
Mal.seasonArchive()
Mal.seasonLater()

let schedule = Mal.schedule()
schedule.all()
schedule.monday()
schedule.tuesday()
schedule.wednesday()
schedule.thursday()
schedule.friday()
schedule.saturday()
schedule.sunday()
schedule.other()
schedule.unknown()

let top = Mal.top().anime()
//                 .manga()
//                 .people()
//                 .characters()

// All means "no subtype"
top.all(p)
// Anime Subtypes
top.airing(p)
top.upcoming(p)
top.tv(p)
top.movie(p)
top.ova(p)
top.special(p)
// Manga Subtypes
top.manga(p)
top.novels(p)
top.oneshots(p)
top.doujin(p)
top.manhwa(p)
top.manhua(p)
// Anime & Manga Subtypes
top.bypopularity(p)
top.favorite(p)

import {GenreAnime,GenreManga} from Genre
Mal.genre().anime(GenreAnime.Action,p)
//         .manga(GenreManga.Action,p)



Mal.producer(id,p)
Mal.magazine(id,p)


let user = Mal.user("username")
user.profile()

user.history().all()
//            .anime()
//            .manga()

user.friends(p)


let params = {
    search: "q",
    sort: "order_by"
}

let animelist = user.animelist(p)
animelist.all(params)
animelist.watching(params)
animelist.onhold(params)
animelist.dropped(params)
animelist.plantowatch(params)

let mangalist = user.mangalist(p)
mangalist.all(params)
mangalist.reading(params)
mangalist.onhold(params)
mangalist.dropped(params)
mangalist.plantoread(params)

let club = Mal.club(id)
club.info()
club.members(p)
