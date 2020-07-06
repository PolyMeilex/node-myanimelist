import { Mal } from "../";

const mal = Mal.api("6114d00ca681b7701d1e15fe11a4987e");

async function main(l: string, p: string) {
  let acount = await mal.login(l, p);
  console.log(acount);

  let user = acount.user();

  // let info = await user.info([]).call();

  // console.log(info);

  // let list = await user.animelist().call();

  // console.log(list);

  let list = await user.animelist().call();

  console.log(list.data);
}
