import Mal from "../dist/indexDeno.js";

let test = Mal.anime(1);
test.info().then((s: any) => s.json()).then((j: any) => console.log(j));