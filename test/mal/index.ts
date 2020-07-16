import { Mal } from "../../";
import assert from "assert";

import * as Data from "./dummyData";
import * as T from "./util/types";
import { assertTypeof, nullable, nonNullable, assertIsOneOf } from "./util";

const mal = Mal.api("6114d00ca681b7701d1e15fe11a4987e");

module Common {
  export function picture(p: Mal.Common.Picture) {
    describe("Picture", () => {
      it("large", () => assertTypeof(p.large, T.string, true));
      it("medium", () => assertTypeof(p.medium, T.string));
    });
  }
  export function personBase(p: Mal.Common.PersonBase) {
    describe(`PersonBase: ${p.id}`, () => {
      it("id", () => assertTypeof(p.id, T.number));
      it("first_name", () => assertTypeof(p.first_name, T.string));
      it("last_name", () => assertTypeof(p.last_name, T.string));
    });
  }
  export function personRoleEdge(p: Mal.Common.PersonRoleEdge) {
    describe("PersonRoleEdge", () => {
      describe(`node`, () => nonNullable(p.node, (p) => personBase(p)));
      it("role", () => assertTypeof(p.role, T.string));
    });
  }
  export function workBase(wb: Mal.Common.WorkBase) {
    describe("WorkBase", () => {
      it("id", () => assertTypeof(wb.id, T.number));
      it("title", () => assertTypeof(wb.title, T.string));
      describe("main_picture", () =>
        nullable(wb.main_picture, (p) => picture(p)));
    });
  }
  export module WorkForList {
    export function all(data: any) {
      describe("WorkForList", () => {
        Common.WorkForList.alternativeTitles(data);
        Common.WorkForList.startDate(data);
        Common.WorkForList.endDate(data);
        Common.WorkForList.synopsis(data);
        Common.WorkForList.mean(data);
        Common.WorkForList.rank(data);
        Common.WorkForList.popularity(data);
        Common.WorkForList.numListUsers(data);
        Common.WorkForList.numScoringUsers(data);
        Common.WorkForList.nsfw(data);
        Common.WorkForList.genres(data);
        Common.WorkForList.createdAt(data);
        Common.WorkForList.UpdatedAt(data);
      });
    }
    export function alternativeTitles(
      t: Mal.Common.WorkForList.AlternativeTitles
    ) {
      describe("AlternativeTitles", () =>
        nullable(t.alternative_titles, (t) => {
          it("synonyms", () =>
            nonNullable(t.synonyms, (t) =>
              t.forEach((s) => assertTypeof(s, T.string))
            ));
          it("en", () => assertTypeof(t.en, T.string, true));
          it("ja", () => assertTypeof(t.ja, T.string, true));
        }));
    }
    export function startDate(t: Mal.Common.WorkForList.StartDate) {
      describe("StartDate", () => {
        it("start_date", () => assertTypeof(t.start_date, T.string, true));
      });
    }
    export function endDate(t: Mal.Common.WorkForList.EndDate) {
      describe("EndDate", () => {
        it("end_date", () => assertTypeof(t.end_date, T.string, true));
      });
    }
    export function synopsis(t: Mal.Common.WorkForList.Synopsis) {
      describe("EndDate", () => {
        it("synopsis", () => assertTypeof(t.synopsis, T.string, true));
      });
    }
    export function mean(t: Mal.Common.WorkForList.Mean) {
      describe("Mean", () => {
        it("mean", () => assertTypeof(t.mean, T.number, true));
      });
    }
    export function rank(t: Mal.Common.WorkForList.Rank) {
      describe("Rank", () => {
        it("rank", () => assertTypeof(t.rank, T.number, true));
      });
    }
    export function popularity(t: Mal.Common.WorkForList.Popularity) {
      describe("Popularity", () => {
        it("popularity", () => assertTypeof(t.popularity, T.number, true));
      });
    }
    export function numListUsers(t: Mal.Common.WorkForList.NumListUsers) {
      describe("NumListUsers", () => {
        it("num_list_users", () => assertTypeof(t.num_list_users, T.number));
      });
    }
    export function numScoringUsers(t: Mal.Common.WorkForList.NumScoringUsers) {
      describe("NumScoringUsers", () => {
        it("num_scoring_users", () =>
          assertTypeof(t.num_scoring_users, T.number));
      });
    }
    export function nsfw(t: Mal.Common.WorkForList.Nsfw) {
      describe("Nsfw", () => {
        nullable(t.nsfw, (t) => {
          it(`nsfw: ${t}`, () => {
            const opt = ["white", "gray", "black"];
            assertIsOneOf(t, opt);
          });
        });
      });
    }
    export function genres(t: Mal.Common.WorkForList.Genres) {
      describe("Genres", () => {
        describe("genres", () => {
          nonNullable(t.genres, (g) => {
            g.forEach((g) => {
              it(`id: ${g.id}`, () => assertTypeof(g.id, T.number));
              it(`name: ${g.name}`, () => assertTypeof(g.name, T.string));
            });
          });
        });
      });
    }
    export function createdAt(t: Mal.Common.WorkForList.CreatedAt) {
      describe("CreatedAt", () => {
        it("created_at", () => assertTypeof(t.created_at, T.string));
      });
    }
    export function UpdatedAt(t: Mal.Common.WorkForList.UpdatedAt) {
      describe("UpdatedAt", () => {
        it("updated_at", () => assertTypeof(t.updated_at, T.string));
      });
    }
  }
}

module Manga {
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

async function manga(acount: Mal.MalAcount) {
  let manga = acount.manga();

  let fields = Mal.Manga.mangaFields()
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
      Mal.Manga.mangaListStatusFields()
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

// async function main(l: string, p: string) {
export async function main(t: Mal.MalToken) {
  let acount = mal.loadToken(t);

  await manga(acount);
}
