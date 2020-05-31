import Mal from "esm-myanimelist";

Mal.anime(1)
  .info()
  .then((ok) => console.log(ok.data));
