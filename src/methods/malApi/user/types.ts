export interface UserBase {
  id: number;
  name: string;
  location: string | null;
  joined_at: string;
  picture: string;
}

export module User {
  export interface Gender {
    gender: string | null;
  }
  export interface Birthday {
    birthday: string | null;
  }
  export interface AnimeStatistics {
    anime_statistics: unknown | null;
  }
  export interface TimeZone {
    time_zone: string | null;
  }
  export interface IsSupporter {
    is_supporter: boolean | null;
  }
}
