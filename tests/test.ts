import Mal from "../";

Mal.days("PolyMagic")
  .then(j => console.log(j))
  .catch(e => console.log(e));

Mal.days("PolyMagic", "anime")
  .then(j => console.log(j))
  .catch(e => console.log(e));

Mal.days("PolyMagic", "manga")
  .then(j => console.log(j))
  .catch(e => console.log(e));

Mal.days("PolyMagic", "broken")
  .then(j => console.log(j))
  .catch(e => console.log(e));
