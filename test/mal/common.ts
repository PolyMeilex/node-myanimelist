import { Mal } from "../../";
import { assertTypeof, nullable, nonNullable, assertIsOneOf } from "./util";
import * as T from "./util/types";

export module Common {
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
