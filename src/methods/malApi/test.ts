import { Mal } from "../../";
const mal = Mal.api("6114d00ca681b7701d1e15fe11a4987e");

async function manga(acount: Mal.MalAcount) {
  let a = acount
    .anime()
    .search("Sakura", Mal.Anime.animeFields().alternativeTitles());
}
