import Mal from "node-myanimelist";

let test = Mal.anime(1);
test.info().then((s) => console.log(s.data));
