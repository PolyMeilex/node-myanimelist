// Interfaces
import { SearchFilter } from "./methods/jikan/search";
import { ListsOBJ } from "./methods/poly/list";
import { LoginData } from "./methods/poly/noApiLogin";
import { animeUpdatesOBJ } from "./methods/poly/animeUpdates";

class MalClient {
  //Jikan API
  public anime(id: number, request?: string, parameter?: number): Promise<any> {
    return require("./methods/jikan/anime")(id, request, parameter);
  };
  public manga(id: number, request?: string): Promise<any> {
    return require("./methods/jikan/manga")(id, request);
  };
  public person(id: number, request?: string): Promise<any> {
    return require("./methods/jikan/person")(id, request);
  };
  public character(id: number, request?: string): Promise<any> {
    return require("./methods/jikan/character")(id, request);
  };
  public search(type: string, query: string, filter?: SearchFilter): Promise<Array<any>> {
    return require("./methods/jikan/search")(type, query, filter);
  };
  public season(year: number, season: string): Promise<any> {
    return require("./methods/jikan/season")(year, season);
  };
  public seasonArchive(): Promise<any> {
    return require("./methods/jikan/seasonArchive")();
  };
  public schedule(day: string): Promise<any> {
    return require("./methods/jikan/schedule")(day);
  };
  public top(type: string, page?: number, subtype?: string): Promise<any> {
    return require("./methods/jikan/top")(type, page, subtype);
  };
  public genre(type:string,genre_id?:number,page?:number): Promise<any> {
    return require("./methods/jikan/genre")(type,genre_id,page);
  };
  public producer(producer_id:number,page?:number): Promise<any> {
    return require("./methods/jikan/producer")(producer_id,page);
  };

  public user(username:string,request?:string,argument?:any,argument2?:any): Promise<any> {
    return require("./methods/jikan/user")(username,request,argument,argument2);
  };

  //Poly Methods
  public avatar(name: string): Promise<string> {
    return require("./methods/poly/avatar")(name);
  };
  public list(name: string): Promise<ListsOBJ> {
    return require("./methods/poly/list")(name);
  };
  public animeUpdates(name: string): Promise<animeUpdatesOBJ[]> {
    return require("./methods/poly/animeUpdates")(name);
  };

  //Poly Methods (Api is down methods)
  public days(name: string, type?: string): Promise<number> {
    return require("./methods/poly/days")(name, type);
  };

  public login(login: string, password: string): Promise<LoginData> {
    return require("./methods/poly/noApiLogin")(login, password);
  };

  public notifications(log: LoginData): Promise<any> {
    return require("./methods/poly/loginRequired/notifications")(log);
  };

  public animeEdit(sendJsonBody: any, log: LoginData): Promise<any> {
    return require("./methods/poly/loginRequired/animeEdit")(sendJsonBody, log);
  };
}

global["jikanBaseUrl"] = "https://api.jikan.moe/v3"

const Mal = new MalClient();
const { version } = require('../package.json');
export { Mal, version, MalClient };
export default Mal;