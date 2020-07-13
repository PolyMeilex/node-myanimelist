import { Picture } from ".";

export interface WorkBase {
  id: number;
  title: string;
  main_picture: Picture | null;
}

export module WorkForList {
  export interface AlternativeTitles {
    /**
     * "synonyms" or ISO 639-1
     */
    alternative_titles: {
      synonyms: string[];
      en: string | null;
      ja: string | null;
    } | null;
  }

  export interface StartDate {
    start_date: string | null;
  }

  export interface EndDate {
    end_date: string | null;
  }

  export interface Synopsis {
    /**
     * Synopsis.
     *
     * The API strips BBCode tags from the result.
     */
    synopsis: string | null;
  }

  export interface Mean {
    /**
     * Mean score.
     *
     * When the `mean` can not be calculated, such as when the number of user scores is small, the result does not include this field.
     */
    mean: number | null;
  }

  export interface Rank {
    /**
     * When the `rank` can not be calculated, such as when the number of user scores is small, the result does not include this field.
     */
    rank: number | null;
  }

  export interface Popularity {
    popularity: number | null;
  }

  export interface NumListUsers {
    /**
     * Number of users who have this work in their list.
     */
    num_list_users: number;
  }

  export interface NumScoringUsers {
    num_scoring_users: number;
  }

  export interface Nsfw {
    /**
     * | Value    | Description|
     * | :------- | :--------------------------------  |
     * | white    | This work is safe for work         |
     * | gray     | This work may be not safe for work |
     * | black    | This work is not safe for work     |
     */
    nsfw: "white" | "gray" | "black" | null;
  }

  export interface Genres {
    genres: { id: number; name: string }[];
  }

  export interface CreatedAt {
    created_at: string;
  }

  export interface UpdatedAt {
    updated_at: string;
  }
}
