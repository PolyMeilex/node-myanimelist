import anime from "./methods/jikan_v2/anime";
import manga from "./methods/jikan_v2/manga";
declare class MalClient {
    anime: typeof anime;
    manga: typeof manga;
}
declare const Mal: MalClient;
export { Mal };
export default Mal;
