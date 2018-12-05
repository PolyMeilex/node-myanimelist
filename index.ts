class Mal {
  //Jikan API
  anime = (id: number, request?: string, parameter?: number): Promise<any> => {
    return require("./methods/jikan/anime")(id, request, parameter);
  };
  manga = (id: number, request?: string): Promise<any> => {
    return require("./methods/jikan/manga")(id, request);
  };
  person = (id: number, request?: string): Promise<any> => {
    return require("./methods/jikan/person")(id, request);
  };
  character = (id: number, request?: string): Promise<any> => {
    return require("./methods/jikan/character")(id, request);
  };
  search = (type: string, query: string, filter?: object): Promise<any> => {
    return require("./methods/jikan/search")(type, query, filter);
  };
  season = (year: number, season: string): Promise<any> => {
    return require("./methods/jikan/season")(year, season);
  };
  seasonArchive = (): Promise<any> => {
    return require("./methods/jikan/seasonArchive")();
  };
  schedule = (day: string): Promise<any> => {
    return require("./methods/jikan/schedule")(day);
  };
  top = (type: string, page?: number, subtype?: string): Promise<any> => {
    return require("./methods/jikan/top")(type, page, subtype);
  };
  genre = (type:String,genre_id?:Number,page?:Number): Promise<any> => {
    return require("./methods/jikan/genre")(type,genre_id,page);
  };
  producer = (producer_id:Number,page?:Number): Promise<any> => {
    return require("./methods/jikan/producer")(producer_id,page);
  };

  user = (username:String,request?:String,argument?:any,argument2?:any): Promise<any> => {
    return require("./methods/jikan/user")(username,request,argument,argument2);
  };

  //Poly Methods
  avatar = (name: string): Promise<string> => {
    return require("./methods/poly/avatar")(name);
  };
  list = (name: string): Promise<ListsOBJ> => {
    return require("./methods/poly/list")(name);
  };
  animeUpdates = (name: string): Promise<animeUpdatesOBJ[]> => {
    return require("./methods/poly/animeUpdates")(name);
  };

  //Poly Methods (Api is down methods)
  days = (name: string, type?: string): Promise<number> => {
    return require("./methods/poly/days")(name, type);
  };

  login = (login: string, password: string): Promise<LoginData> => {
    return require("./methods/poly/noApiLogin")(login, password);
  };

  notifications = (log: LoginData): Promise<any> => {
    return require("./methods/poly/loginRequired/notifications")(log);
  };

  animeEdit = (sendJsonBody: any, log: LoginData): Promise<any> => {
    return require("./methods/poly/loginRequired/animeEdit")(sendJsonBody, log);
  };
}

global['jikanBaseUrl'] = "https://api.jikan.moe/v3"

const obj = new Mal();
module.exports = obj;
module.exports.default = obj;

export default obj;

// Types Definitions

interface LoginData {
  MALSESSIONID: string;
  csrf_token: string;
}

interface ListsOBJ {
  myinfo: {
    user_id: string;
    user_name: string;
    user_watching: string;
    user_completed: string;
    user_onhold: string;
    user_dropped: string;
    user_plantowatch: string;
    user_days_spent_watching: string;
  };
  anime: [
    {
      series_animedb_id: string;
      series_title: string;
      series_synonyms: string;
      series_type: string;
      series_episodes: string;
      series_status: string;
      series_start: string;
      series_end: string;
      series_image: string;
      my_id: string;
      my_watched_episodes: string;
      my_start_date: string;
      my_finish_date: string;
      my_score: string;
      my_status: string;
      my_rewatching: string;
      my_rewatching_ep: string;
      my_last_updated: string;
      my_tags: string;
    }
  ];
}

interface animeUpdatesOBJ {
  title: string;
  link: string;
  ep: number;
  score: number;
  img: string;
  date: string;
  color: number;
}
