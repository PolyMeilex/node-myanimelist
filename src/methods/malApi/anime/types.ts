import * as Common from "../schemas/common";

export module AnimeForList {
  export interface MediaType {
    media_type:
      | "unknown"
      | "tv"
      | "ova"
      | "movie"
      | "special"
      | "ona"
      | "music";
  }

  export interface Status {
    /**
     * Airing status.
     */
    status: "finished_airing" | "currently_airing" | "not_yet_aired";
  }

  export interface MyListStatus<T> {
    my_list_status: T | null;
  }

  export interface NumEpisodes {
    /**
     * The total number of episodes of this series. If unknown, it is 0.
     */
    num_episodes: number;
  }

  export interface StartSeason {
    start_season: {
      year: number;
      season: "winter" | "spring" | "summer" | "fall";
    } | null;
  }

  export interface Broadcast {
    /**
     * Broadcast date.
     */
    broadcast: {
      /**
       * Day of the week broadcast in Japan time.
       *
       * Day of the week or `other`
       */
      day_of_the_week: string;
      /**
       * for example: "01:25"
       */
      start_time: string | null;
    } | null;
  }

  export interface Source {
    /**
     * Original work.
     */
    source:
      | "other"
      | "original"
      | "manga"
      | "4_koma_manga"
      | "web_manga"
      | "digital_manga"
      | "novel"
      | "light_novel"
      | "visual_novel"
      | "game"
      | "card_game"
      | "book"
      | "picture_book"
      | "radio"
      | "music"
      | null;
  }

  export interface AverageEpisodeDuration {
    /**
     * Average length of episode in seconds.
     */
    average_episode_duration: number | null;
  }

  export interface Rating {
    /**
     * | Value | Description|
     * | :---- | :--------- |
     * | g     | 	G - All Ages |
     * | pg    | 	PG - Children |
     * | pg_13 | 	pg_13 - Teens 13 and Older |
     * | r     | 	R - 17+ (violence & profanity) |
     * | r+    | 	R+ - Profanity & Mild Nudity |
     * | rx    | 	Rx - Hentai |
     */
    rating: "g" | "pg" | "pg_13" | "r" | "r+" | "rx" | null;
  }

  export interface Studios {
    studios: {
      id: number;
      name: string;
    }[];
  }
}

export module AnimeForDetails {
  export interface Pictures {
    pictures: Array<Common.Picture>;
  }
  export interface Background {
    background: string | null;
  }
  export interface RelatedAnime {
    related_anime: Array<unknown>;
  }
  export interface RelatedManga {
    related_manga: Array<unknown>;
  }
  export interface Recommendations {
    recommendations: Array<unknown>;
  }
  export interface Statistics {
    statistics: unknown | null;
  }
}

export interface AnimeListStatusBase {
  status:
    | "watching"
    | "completed"
    | "on_hold"
    | "dropped"
    | "plan_to_watch"
    | null;
  /**
   * 0-10
   */
  score: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  /**
   * 0 or the number of watched episodes.
   */
  num_episodes_watched: number;
  // num_watched_episodes: number;

  /**
   * If authorized user watches an anime again after completion, this field value is true.
   *
   * In this case, MyAnimeList treats the anime as 'watching' in the user's anime list.
   */
  is_rewatching: boolean;

  updated_at: string;
}

export module AnimeListStatus {
  export interface StartDate {
    start_date: string | null;
  }
  export interface FinishDate {
    finish_date: string | null;
  }
  export interface Priority {
    priority: number;
  }
  export interface NumTimesRewatched {
    num_times_rewatched: number;
  }
  export interface RewatchValue {
    rewatch_value: number;
  }
  export interface Tags {
    tags: string[];
  }
  export interface Comments {
    /**
     * You cannot contain this field in a list.
     */
    comments: string;
  }
}

export interface AnimeItem<T> {
  node: T;
}
