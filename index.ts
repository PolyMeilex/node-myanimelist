class Mal{
    //Jikan API
    anime = (id:Number,request?:String,parameter?:Number):Promise<any> => { return require('./methods/jikan/anime')(id,request,parameter) };
    manga = (id:Number,request?:String):Promise<any>                  => { return require('./methods/jikan/manga')(id,request) };
    person = (id:Number,request?:String):Promise<any>                 => { return require('./methods/jikan/person')(id,request) };
    character = (id:Number,request?:String):Promise<any>              => { return require('./methods/jikan/character')(id,request) }
    search = (type:String,query:String,page?:Number):Promise<any>     => { return require('./methods/jikan/search')(type,query,page) }
    season = (year:Number,season:String):Promise<any>                => { return require('./methods/jikan/season')(year,season) }
    schedule = (day:String):Promise<any>                             => { return require('./methods/jikan/schedule')(day) }
    top = (type:String,page?:Number,subtype?:String):Promise<any>      => { return require('./methods/jikan/top')(type,page,subtype) }

    //Poly Methods
    avatar = (name:String):Promise<String>      => { return require('./methods/poly/avatar')(name) }
    list = (name:String):Promise<ListsOBJ>      => { return require('./methods/poly/list')(name) }
    animeUpdates = (name:String):Promise<animeUpdatesOBJ[]>   => { return require('./methods/poly/animeUpdates')(name) }
}




export default new Mal();


// Types Definitions

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




interface animeUpdatesOBJ {
    title: string;
    link: string;
    ep:Number;
    score:Number;
    img:String;
    date:String;
    color:Number;
}