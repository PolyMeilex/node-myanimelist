import Mal from "../";

(async () => {
  const log = await Mal.login("PolyMagic", "**Pas**");

  let notyfications = await Mal.notyfications(log);

  console.log(notyfications);
})();
