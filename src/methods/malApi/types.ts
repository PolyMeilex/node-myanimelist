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
