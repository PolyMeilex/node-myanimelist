
class Mal{
    //Jikan API
    anime = (id:Number,request?:String,parameter?:Number)=> { return require('./methods/jikan/anime')(id,request,parameter) };
    manga = (id:Number,request?:String)                 => { return require('./methods/jikan/manga')(id,request) };
    person = (id:Number,request?:String)                => { return require('./methods/jikan/person')(id,request) };
    character = (id:Number,request?:String)             => { return require('./methods/jikan/character')(id,request) }
    search = (type:String,query:String,page?:Number)    => { return require('./methods/jikan/search')(type,query,page) }
    season = (year:Number,season:String)               => { return require('./methods/jikan/season')(year,season) }
    schedule = (day:String)                            => { return require('./methods/jikan/schedule')(day) }
    top = (type:String,page?:Number,subtype?:String)     => { return require('./methods/jikan/top')(type,page,subtype) }

    //Poly Methods
    avatar = (name:String)     => { return require('./methods/poly/avatar')(name) }
    list = (name:String)     => { return require('./methods/poly/list')(name) }
    animeUpdates = (name:String)     => { return require('./methods/poly/animeUpdates')(name) }
}




export default new Mal();