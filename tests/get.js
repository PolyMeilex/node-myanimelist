import Mal from "esm-myanimelist-tests";

let test = Mal.anime(1);
test
  .info()
  .then((res) => res.json())
  .then((s) => console.log(s));
