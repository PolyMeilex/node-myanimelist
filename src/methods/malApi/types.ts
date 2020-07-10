export type AnimeField =
  | "alternative_titles"
  | "media_type"
  | "num_episodes"
  | "status"
  | "start_date"
  | "end_date"
  | "average_episode_duration"
  | "synopsis"
  | "mean"
  | "rank"
  | "popularity"
  | "num_list_users"
  | "num_favorites"
  | "num_scoring_users"
  | "start_season"
  | "broadcast"
  | "my_list_status{start_date,finish_date}"
  | "nsfw"
  | "created_at"
  | "updated_at"
  | string;

// interface MyListStatus {
//   status: any;
//   score: any;
// }

// class Fields<T> {
//   constructor(a: T) {}
// }

// let a: MyListStatus = {
//   status: {},
//   score: {},
// };

// let f = new Fields(a);

// interface AnimeResponse {
//   id: number;
//   title: string;
//   main_picture: { medium: string; large: string | null };
// }

// class AnimeBase<T> {
//   fields: any = {};

//   type: T = null as any;

//   alternativeTitle(): AnimeBase<T & AnimeAlternativeTitles> {
//     this.fields["alternative_titles"] = true;
//     return this as any;
//   }
//   status(): AnimeBase<T & AnimeStatus> {
//     this.fields["status"] = true;
//     return this as any;
//   }

//   parse(): T {
//     return null as any;
//   }
// }
// function animeBase() {
//   return new AnimeBase<AnimeResponse>();
// }
// class AnimeAlter extends AnimeBase {
//   alternative_titles = true;
// }
// class AnimeStatus extends AnimeBase {
//   alternative_titles = true;
// }

// interface AnimeAlternativeTitles {
//   alternative_titles: {
//     synonyms: string[];
//     en: string | null;
//     ja: string | null;
//   };
// }

// interface AnimeStatus {
//   status: String;
// }

// let b = animeBase().alternativeTitle().status();

// let t = b.type;

// console.log(b);

// let data = b.parse();

// let id = data.id;

// let base: AnimeResponse = {
//   id: 5,
//   title: "test",
//   main_picture: { medium: "test", large: "test" },
// };

// let res: AnimeResponse | AnimeAlternativeTitles = {
//   id: 5,
//   title: "test",
//   main_picture: { medium: "test", large: "test" },
//   alternative_titles: {
//     synonyms: [],
//     en: "test",
//     ja: "test",
//   },
// };

// export type MyListStatusField = "start_date" | "finish_date";

// export class MyListStatusFields {
//   fields: MyListStatusField[] = [];

//   constructor(fields: MyListStatusField[]) {
//     this.fields = fields;
//   }
// }

// MyListStatusFields.prototype.toString = function () {
//   return "my_list_status{" + this.fields.join(",") + "}";
// };

// export type RecommendationsField =
//   | "alternative_titles"
//   | "media_type"
//   | "num_episodes"
//   | "status"
//   | "start_date"
//   | "end_date"
//   | "average_episode_duration"
//   | "synopsis"
//   | "mean"
//   | "rank"
//   | "popularity"
//   | "num_list_users"
//   | "num_favorites"
//   | "num_scoring_users"
//   | "start_season"
//   | "broadcast"
//   | "my_list_status{start_date,finish_date}"
//   | MyListStatusFields
//   | "nsfw"
//   | "created_at"
//   | "updated_at";

// export type RelatedAnimeField =
//   | "alternative_titles"
//   | "media_type"
//   | "num_episodes"
//   | "status"
//   | "start_date"
//   | "end_date"
//   | "average_episode_duration"
//   | "synopsis"
//   | "mean"
//   | "rank"
//   | "popularity"
//   | "num_list_users"
//   | "num_favorites"
//   | "num_scoring_users"
//   | "start_season"
//   | "broadcast"
//   | "my_list_status{start_date,finish_date}"
//   | MyListStatusFields
//   | "nsfw
//   | "created_at"
//   | "updated_at";
