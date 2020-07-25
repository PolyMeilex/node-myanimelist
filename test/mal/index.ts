import { Mal } from "../../";

import { manga } from "./manga";
import * as Data from "./dummyData";

import assert from "assert";

const mal = Mal.auth("6114d00ca681b7701d1e15fe11a4987e");

function forum(acount: Mal.MalAcount) {
  let forum = acount.forum;

  describe("Forum", async () => {
    {
      let boards = forum.boards();
      it("/forum/boards", () =>
        assert.equal(
          "https://api.myanimelist.net/v2/forum/boards",
          boards.url
        ));
    }

    {
      let details = forum.details(5);
      it("/forum/topic/5", () =>
        assert.equal(
          "https://api.myanimelist.net/v2/forum/topic/5",
          details.url
        ));
    }

    {
      let details = forum.details(5, 50);
      it("/forum/topic/5?limit=50", () =>
        assert.equal(
          "https://api.myanimelist.net/v2/forum/topic/5?limit=50",
          details.url
        ));
    }

    {
      let details = forum.details(5, 50, 1);
      it("/forum/topic/5?limit=50&offset=1", () =>
        assert.equal(
          "https://api.myanimelist.net/v2/forum/topic/5?limit=50&offset=1",
          details.url
        ));
    }

    {
      let details = forum.topics({ q: "Official" });
      it("/forum/topics?q=Official", () =>
        assert.equal(
          "https://api.myanimelist.net/v2/forum/topics?q=Official",
          details.url
        ));
    }

    {
      let details = forum.topics({ q: "Official", limit: 1 });
      it("/forum/topics?q=Official&limit=1", () =>
        assert.equal(
          "https://api.myanimelist.net/v2/forum/topics?q=Official&limit=1",
          details.url
        ));
    }
  });
}

async function animelist(acount: Mal.MalAcount) {
  const req = acount.user.animelist(
    "@me",
    Mal.Anime.fields(),
    Mal.Anime.listStatusFields()
  );

  req.call = () => Data.Animelist.def as any;

  const data = await req.call();

  // let item = data.data[0];
}
// async function main(l: string, p: string) {
export async function main(t: Mal.MalToken) {
  let acount = mal.loadToken(t);

  forum(acount);
  await animelist(acount);
  await manga(acount);
}
