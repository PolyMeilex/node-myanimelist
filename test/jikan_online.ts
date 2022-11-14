import { Jikan4 } from "../";
import axios from "axios";
import assert from "assert";

describe("Online Anime", () => {
  it("/anime/1", async () => {
    // Bring back oryginal get function
    // @ts-ignore
    global.__jikanGet = function(url: string): Promise<any> {
      return new Promise((res, rej) => {
        axios
          .get(url)
          .then((r) => res(r.data))
          .catch((err) => rej(err));
      });
    };

    const data = (await Jikan4.anime(1).info()).data;

    assert.equal(1, data.mal_id);

    // Bring back test get function
    // @ts-ignore
    global.jikanGet = (s) => s;
  });
});
