import { Mal } from "../../";

import * as Data from "./dummyData";
import * as T from "./util/types";
import { assertTypeof, nullable, nonNullable, assertIsOneOf } from "./util";
import { Common } from "./common";

export module Manga {
  export module MangaListStatus {
    export function mangaListStatusBase(data: Mal.Manga.MangaListStatusBase) {
      describe("MangaListStatusBase", () => {
        it("status", () => {
          nullable(data.status, (t) => {
            const opt = [
              "reading",
              "completed",
              "on_hold",
              "dropped",
              "plan_to_read",
            ];
            assertIsOneOf(t, opt);
          });
        });
        it("score", () => {
          assertTypeof(data.score, T.number);
        });
        it("num_volumes_read", () => {
          assertTypeof(data.num_volumes_read, T.number);
        });
        it("num_chapters_read", () => {
          assertTypeof(data.num_chapters_read, T.number);
        });
        it("is_rereading", () => {
          assertTypeof(data.is_rereading, T.boolean);
        });
        it("updated_at", () => {
          assertTypeof(data.updated_at, T.string);
        });
      });
    }
    export function all(data: any) {
      Manga.MangaListStatus.mangaListStatusBase(data);

      Manga.MangaListStatus.startDate(data);
      Manga.MangaListStatus.finishDate(data);
      Manga.MangaListStatus.priority(data);
      Manga.MangaListStatus.numTimesReread(data);
      Manga.MangaListStatus.rereadValue(data);
      Manga.MangaListStatus.tags(data);
      Manga.MangaListStatus.comments(data);
    }
    export function startDate(t: Mal.Manga.MangaListStatus.StartDate) {
      describe("StartDate", () => {
        it("start_date", () => assertTypeof(t.start_date, T.string, true));
      });
    }
    export function finishDate(t: Mal.Manga.MangaListStatus.FinishDate) {
      describe("FinishDate", () => {
        it("finish_date", () => assertTypeof(t.finish_date, T.string, true));
      });
    }
    export function priority(t: Mal.Manga.MangaListStatus.Priority) {
      describe("Priority", () => {
        it("priority", () => assertTypeof(t.priority, T.number));
      });
    }
    export function numTimesReread(
      t: Mal.Manga.MangaListStatus.NumTimesReread
    ) {
      describe("NumTimesReread", () => {
        it("num_times_reread", () =>
          assertTypeof(t.num_times_reread, T.number));
      });
    }
    export function rereadValue(t: Mal.Manga.MangaListStatus.RereadValue) {
      describe("RereadValue", () => {
        it("reread_value", () => assertTypeof(t.reread_value, T.number));
      });
    }
    export function tags(t: Mal.Manga.MangaListStatus.Tags) {
      describe("Tags", () => {
        nonNullable(t.tags, (t) => {
          it("tags", () => {
            t.forEach((t) => {
              assertTypeof(t, T.string);
            });
          });
        });
      });
    }
    export function comments(t: Mal.Manga.MangaListStatus.Comments) {
      describe("Comments", () => {
        it("comments", () => assertTypeof(t.comments, T.string));
      });
    }
  }
  export module MangaForList {
    export function all(data: any) {
      describe("MangaForList", () => {
        Manga.MangaForList.mediaType(data);
        Manga.MangaForList.status(data);
        Manga.MangaForList.myListStatus(data);
        Manga.MangaForList.numVolumes(data);
        Manga.MangaForList.numChapters(data);
        Manga.MangaForList.authors(data);
      });
    }
    export function mediaType(t: Mal.Manga.MangaForList.MediaType) {
      describe("MediaType", () => {
        nonNullable(t.media_type, (t) => {
          it(`media_type: ${t}`, () => {
            const opt = [
              "unknown",
              "manga",
              "novel",
              "one_shot",
              "doujinshi",
              "manhwa",
              "manhua",
              "oel",
            ];
            assertIsOneOf(t, opt);
          });
        });
      });
    }
    export function status(t: Mal.Manga.MangaForList.Status) {
      describe("Status", () => {
        nonNullable(t.status, (t) => {
          const opt = ["finished", "currently_publishing", "not_yet_published"];
          assertIsOneOf(t, opt);
        });
      });
    }
    export function myListStatus(t: Mal.Manga.MangaForList.MyListStatus<any>) {
      describe("MyListStatus", () => {
        nullable(t.my_list_status, (t) => {
          Manga.MangaListStatus.all(t);
        });
      });
    }
    export function numVolumes(t: Mal.Manga.MangaForList.NumVolumes) {
      describe("NumVolumes", () => {
        it("num_volumes", () => assertTypeof(t.num_volumes, T.number));
      });
    }
    export function numChapters(t: Mal.Manga.MangaForList.NumChapters) {
      describe("NumChapters", () => {
        it("num_chapters", () => assertTypeof(t.num_chapters, T.number));
      });
    }
    export function authors(t: Mal.Manga.MangaForList.Authors) {
      describe("Authors", () => {
        nonNullable(t.authors, (a) => {
          describe("authors", () => a.forEach((p) => Common.personRoleEdge(p)));
        });
      });
    }
  }
}

export async function manga(acount: Mal.MalAcount) {
  let manga = acount.manga;

  let fields = Mal.Manga.fields()
    // WorkBase
    .alternativeTitles()
    .startDate()
    .endDate()
    .synopsis()
    .mean()
    .rank()
    .popularity()
    .numListUsers()
    .numScoringUsers()
    .nsfw()
    .genres()
    .createdAt()
    .updatedAt()
    // MagaForList
    .mediaType()
    .status()
    .myListStatus(
      Mal.Manga.listStatusFields()
        .startDate()
        .finishDate()
        .priority()
        .numTimesReread()
        .rereadValue()
        .tags()
        .comments()
    )
    .numVolumes()
    .numChapters()
    .authors();

  describe("Manga", async () => {
    describe("Search", async () => {
      let search = await manga.search("Sakurasou", fields);
      search.call = () => Data.Manga.search as any;
      let res = await search.call();

      let data = res.data.splice(0, 1);

      data.forEach((d) => {
        let data = d.node;
        describe(data.title, () => {
          Common.workBase(data);
          Common.WorkForList.all(data);
          Manga.MangaForList.all(data);
        });
      });
    });
    describe("Details", () => it("TODO:", () => {}));
  });
}
