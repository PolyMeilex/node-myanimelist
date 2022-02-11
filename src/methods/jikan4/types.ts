export type AnimeEpisodes = {
  data: {
    mal_id?: number;
    url?: string;
    title?: string;
    title_japanese?: string;
    title_romanji?: string;
    duration?: number;
    aired?: string;
    filler?: boolean;
    recap?: boolean;
    forum_url?: string;
  }[];
} & Pagination;

export type AnimeNews = Pagination & News;

export type CharacterPictures = {
  data: { image_url?: string; large_image_url?: string }[];
};

export type ClubMember = {
  data: { username?: string; url?: string; image_url?: string }[];
};

export type MangaNews = Pagination & News;

export type MangaPictures = {
  data: { image_url?: string; large_image_url?: string }[];
};

export type PersonPictures = {
  data: { image_url?: string; large_image_url?: string }[];
};

export type Random = { data: (Anime | Manga | Character | Person)[] };

export type Schedules = { data: Anime[] } & Pagination;

export type SearchQuerySort = string;

export type UsersSearch = { data: {}[] } & Pagination;

export type Seasons = { data: { year?: number; seasons: string[] }[] };

export type ReviewsCollection = { data: (AnimeReview | MangaReview)[] };

export type UserFriends = {
  data: ({ user: UserMeta } & {
    last_online?: string;
    friends_since?: string;
  })[];
} & Pagination;

export type UserClubs = {
  data: { mal_id?: number; name?: string; url?: string }[];
} & Pagination;

export type WatchEpisodes = {
  data: {
    entry: AnimeMeta;
    episodes: {
      mal_id?: string;
      url?: string;
      title?: string;
      premium?: boolean;
    }[];
    region_locked?: boolean;
  }[];
} & Pagination;

export type WatchPromos = Pagination & { title?: string } & {
  data: { entry: AnimeMeta; trailer: Trailer[] }[];
};

export type AnimeSearchQueryType = string;

export type AnimeSearchQueryStatus = string;

export type AnimeSearchQueryRating = string;

export type AnimeSearchQueryOrderby = string;

export type CharactersSearchQueryOrderby = string;

export type ClubSearchQueryType = string;

export type ClubSearchQueryCategory = string;

export type ClubSearchQueryOrderby = string;

export type MagazinesQueryOrderby = string;

export type MangaSearchQueryType = string;

export type MangaSearchQueryStatus = string;

export type MangaSearchQueryOrderby = string;

export type PeopleSearchQueryOrderby = string;

export type ProducersQueryOrderby = string;

export type UsersSearchQueryGender = string;

export type AnimeCharacters = {
  data: {
    character: {
      mal_id?: number;
      url?: string;
      images: CharacterImages;
      name?: string;
    };
    role?: string;
    voice_actors: {
      person: {
        mal_id?: number;
        url?: string;
        images: PeopleImages;
        name?: string;
      };
      language?: string;
    }[];
  }[];
};

export type AnimeSearch = { data: Anime[] } & Pagination;

export type AnimeEpisode = {
  data: {
    mal_id?: number;
    url?: string;
    title?: string;
    title_japanese?: string;
    title_romanji?: string;
    duration?: number;
    aired?: string;
    filler?: boolean;
    recap?: boolean;
    synopsis?: string;
  };
};

export type AnimeRelations = { data: { relation?: string; entry: MalUrl[] }[] };

export type Anime = {
  mal_id?: number;
  url?: string;
  images: AnimeImages;
  trailer: TrailerBase;
  title?: string;
  title_english?: string;
  title_japanese?: string;
  title_synonyms: string[];
  type?: string;
  source?: string;
  episodes?: number;
  status?: string;
  airing?: boolean;
  aired: Daterange;
  duration?: string;
  rating?: string;
  score: number;
  scored_by?: number;
  rank?: number;
  popularity?: number;
  members?: number;
  favorites?: number;
  synopsis?: string;
  background?: string;
  season?: string;
  year?: number;
  broadcast: Broadcast;
  producers: MalUrl[];
  licensors: MalUrl[];
  studios: MalUrl[];
  genres: MalUrl[];
  explicit_genres: MalUrl[];
  themes: MalUrl[];
  demographics: MalUrl[];
};

export type AnimeStaff = {
  data: {
    person: {
      mal_id?: number;
      url?: string;
      images: PeopleImages;
      name?: string;
    };
    positions: string[];
  }[];
};

export type AnimeStatistics = {
  data: {
    watching?: number;
    completed?: number;
    on_hold?: number;
    dropped?: number;
    plan_to_watch?: number;
    total?: number;
    scores: { score: number; votes?: number; percentage?: number }[];
  };
};

export type AnimeThemes = { data: { openings: string[]; endings: string[] } };

export type AnimeVideos = {
  data: {
    promos: { title?: string; trailer: Trailer }[];
    episodes: {
      mal_id?: number;
      url?: string;
      title?: string;
      episode?: string;
      images: CommonImages;
    }[];
  };
};

export type CharacterAnime = { data: { role?: string; anime: AnimeMeta }[] };

export type CharactersSearch = { data: Character[] } & Pagination;

export type CharacterManga = { data: { role?: string; manga: MangaMeta }[] };

export type Character = {
  mal_id?: number;
  url?: string;
  images: CharacterImages;
  name?: string;
  nicknames: string[];
  favorites?: number;
  about?: string;
  animeography: ({ image_url?: string; role?: string } & MalUrl)[];
  mangaography: ({ image_url?: string; role?: string } & MalUrl)[];
  voice_actors: ({ image_url?: string; language?: string } & MalUrl)[];
};

export type CharacterVoiceActors = {
  data: { language?: string; person: PersonMeta }[];
};

export type ClubsSearch = { data: Club[] } & Pagination;

export type ClubRelations = {
  data: { anime: MalUrl[]; manga: MalUrl[]; characters: MalUrl[] };
};

export type Club = {
  data: {
    mal_id?: number;
    name?: string;
    url?: string;
    images: CommonImages;
    members?: number;
    category?: string;
    created?: string;
    access?: string;
  };
};

export type ClubStaff = { data: { url?: string; username?: string }[] };

export type Trailer = TrailerBase & TrailerImages;

export type TrailerBase = {
  youtube_id?: string;
  url?: string;
  embed_url?: string;
};

export type TrailerImages = {
  images: {
    default_image_url?: string;
    small_image_url?: string;
    medium_image_url?: string;
    large_image_url?: string;
    maximum_image_url?: string;
  };
};

export type Daterange = {
  from?: string;
  to?: string;
  prop: {
    from: { day?: number; month?: number; year?: number };
    to: { day?: number; month?: number; year?: number };
    string?: string;
  };
};

export type Broadcast = {
  day?: string;
  time?: string;
  timezone?: string;
  string?: string;
};

export type MalUrl = {
  mal_id?: number;
  type?: string;
  name?: string;
  url?: string;
};

export type MalUrl2 = {
  mal_id?: number;
  type?: string;
  title?: string;
  url?: string;
};

export type EntryMeta = {
  mal_id?: number;
  url?: string;
  image_url?: string;
  name?: string;
};

export type Relation = { relation?: string; items: MalUrl[] }[];

export type Pagination = {
  pagination: { last_visible_page?: number; has_next_page?: boolean };
};

export type UserMeta = { username?: string; url?: string; images: UserImages };

export type UserById = { data: { url?: string; username?: string } };

export type UserImages = {
  jpg: { image_url?: string };
  webp: { image_url?: string };
};

export type AnimeMeta = {
  mal_id?: number;
  url?: string;
  images: AnimeImages;
  title?: string;
};

export type MangaMeta = {
  mal_id?: number;
  url?: string;
  images: MangaImages;
  title?: string;
};

export type CharacterMeta = {
  mal_id?: number;
  url?: string;
  images: CharacterImages;
  name?: string;
};

export type PersonMeta = {
  mal_id?: number;
  url?: string;
  images: PeopleImages;
  name?: string;
};

export type AnimeImages = {
  jpg: {
    image_url?: string;
    small_image_url?: string;
    large_image_url?: string;
  };
  webp: {
    image_url?: string;
    small_image_url?: string;
    large_image_url?: string;
  };
};

export type MangaImages = {
  jpg: {
    image_url?: string;
    small_image_url?: string;
    large_image_url?: string;
  };
  webp: {
    image_url?: string;
    small_image_url?: string;
    large_image_url?: string;
  };
};

export type CharacterImages = {
  jpg: { image_url?: string; small_image_url?: string };
  webp: { image_url?: string; small_image_url?: string };
};

export type PeopleImages = { jpg: { image_url?: string } };

export type CommonImages = { jpg: { image_url?: string } };

export type Forum = {
  data: {
    mal_id?: number;
    url?: string;
    title?: string;
    date?: string;
    author_username?: string;
    author_url?: string;
    comments?: number;
    last_comment: {
      url?: string;
      author_username?: string;
      author_url?: string;
      date?: string;
    };
  }[];
};

export type Genres = { data: Genre[] };

export type GenreQueryFilter = string;

export type Genre = {
  mal_id?: number;
  name?: string;
  url?: string;
  count?: number;
};

export type Magazines = { data?: Pagination & Magazine };

export type Magazine = {
  mal_id?: number;
  name?: string;
  url?: string;
  count?: number;
};

export type MangaCharacters = {
  data: { character: CharacterMeta; role?: string }[];
};

export type MangaSearch = { data: Manga[] } & Pagination;

export type Manga = {
  mal_id?: number;
  url?: string;
  images: MangaImages;
  title?: string;
  title_english?: string;
  title_japanese?: string;
  title_synonyms: string[];
  type?: string;
  chapters?: number;
  volumnes?: number;
  status?: string;
  publishing?: boolean;
  published: Daterange;
  score: number;
  scored_by?: number;
  rank?: number;
  popularity?: number;
  members?: number;
  favorites?: number;
  synopsis?: string;
  background?: string;
  authors: MalUrl[];
  serializations: MalUrl[];
  genres: MalUrl[];
  explicit_genres: MalUrl[];
  themes: MalUrl[];
  demographics: MalUrl[];
};

export type MangaStatistics = {
  data: {
    reading?: number;
    completed?: number;
    on_hold?: number;
    dropped?: number;
    plan_to_read?: number;
    total?: number;
    scores: { score: number; votes?: number; percentage?: number }[];
  };
};

export type Moreinfo = { data: { moreinfo?: string } };

export type News = {
  data: {
    mal_id?: number;
    url?: string;
    title?: string;
    date?: string;
    author_username?: string;
    author_url?: string;
    forum_url?: string;
    images: CommonImages;
    comments?: number;
    excerpt?: string;
  }[];
};

export type PersonAnime = { data: { position?: string; anime: AnimeMeta }[] };

export type PeopleSearch = { data: Person[] } & Pagination;

export type PersonManga = { data: { position?: string; manga: MangaMeta }[] };

export type Person = {
  mal_id?: number;
  url?: string;
  website_url?: string;
  images: PeopleImages;
  name?: string;
  given_name?: string;
  family_name?: string;
  alternate_names: string[];
  birthday?: string;
  favorites?: number;
  about?: string;
};

export type PersonVoiceActingRoles = {
  data: { role?: string; anime: AnimeMeta; character: CharacterMeta }[];
};

export type Pictures = { data: { images: AnimeImages }[] };

export type PicturesVariants = { data: { images: CommonImages }[] };

export type Producers = { data?: Pagination & Producer };

export type Producer = {
  mal_id?: number;
  name?: string;
  url?: string;
  count?: number;
};

export type UserAbout = { data: { about?: string }[] };

export type UserFavorites = {
  data: {
    anime: ({ type?: string; start_year?: number } & AnimeMeta)[];
    manga: ({ type?: string; start_year?: number } & MangaMeta)[];
    characters: (MalUrl2 & CharacterMeta)[];
    people: CharacterMeta[];
  };
};

export type UserHistory = { data: {}[] };

export type History = { entry: MalUrl; increment?: number; date?: string };

export type UserUpdates = {
  data: {
    anime: ({ entry: AnimeMeta } & {
      score: number;
      status?: string;
      episodes_seen?: number;
      episodes_total?: number;
      date?: string;
    })[];
    manga: ({ entry: MangaMeta } & {
      score: number;
      status?: string;
      chapters_read?: number;
      chapters_total?: number;
      volumes_read?: number;
      volumes_total?: number;
      date?: string;
    })[];
  };
};

export type UserProfile = {
  mal_id?: number;
  username?: string;
  url?: string;
  images: UserImages;
  last_online?: string;
  gender?: string;
  birthday?: string;
  location?: string;
  joined?: string;
};

export type UsersTemp = {
  data: {
    mal_id?: number;
    username?: string;
    url?: string;
    images: { jpg: { image_url?: string }; webp: { image_url?: string } };
    last_online?: string;
    gender?: string;
    birthday?: string;
    location?: string;
    joined?: string;
    anime_stats: {
      days_watched?: number;
      mean_score?: number;
      watching?: number;
      completed?: number;
      on_hold?: number;
      dropped?: number;
      plan_to_watch?: number;
      total_entries?: number;
      rewatched?: number;
      episodes_watched?: number;
    };
    manga_stats: {
      days_read?: number;
      mean_score?: number;
      reading?: number;
      completed?: number;
      on_hold?: number;
      dropped?: number;
      plan_to_read?: number;
      total_entries?: number;
      reread?: number;
      chapters_read?: number;
      volumes_read?: number;
    };
    favorites: {
      anime: EntryMeta[];
      manga: EntryMeta[];
      characters: EntryMeta[];
      people: EntryMeta[];
    };
    about?: string;
  }[];
};

export type UserStatistics = {
  data: {
    anime: {
      days_watched?: number;
      mean_score?: number;
      watching?: number;
      completed?: number;
      on_hold?: number;
      dropped?: number;
      plan_to_watch?: number;
      total_entries?: number;
      rewatched?: number;
      episodes_watched?: number;
    };
    manga: {
      days_read?: number;
      mean_score?: number;
      reading?: number;
      completed?: number;
      on_hold?: number;
      dropped?: number;
      plan_to_read?: number;
      total_entries?: number;
      reread?: number;
      chapters_read?: number;
      volumes_read?: number;
    };
  };
};

export type Recommendations = {
  data: {
    mal_id?: string;
    entry: (AnimeMeta | MangaMeta)[];
    content?: string;
    user: UserById;
  }[];
} & Pagination;

export type EntryRecommendations = {
  data: { entry: (AnimeMeta | MangaMeta)[]; url?: string; votes?: number }[];
};

export type MangaReview = {
  mal_id?: number;
  url?: string;
  type?: string;
  votes?: number;
  date?: string;
  chapters_read?: number;
  review?: string;
  scores: {
    overall?: number;
    story?: number;
    art?: number;
    character?: number;
    enjoyment?: number;
  };
};

export type AnimeReview = {
  mal_id?: number;
  url?: string;
  type?: string;
  votes?: number;
  date?: string;
  review?: string;
  episodes_watched?: number;
  scores: {
    overall?: number;
    story?: number;
    animation?: number;
    sound?: number;
    character?: number;
    enjoyment?: number;
  };
};

export type AnimeReviews = {
  data: ({ user: UserMeta } & AnimeReview)[];
} & Pagination;

export type MangaReviews = {
  data: ({ user: UserMeta } & MangaReview)[];
} & Pagination;

export type AnimeUserupdates = {
  data: {
    user: UserMeta;
    score: number;
    status?: string;
    episodes_seen?: number;
    episodes_total?: number;
    date?: string;
  }[];
} & Pagination;

export type MangaUserupdates = Pagination &
  {
    user: UserMeta;
    score: number;
    status?: string;
    volumes_read?: number;
    volumes_total?: number;
    chapters_read?: number;
    chapters_total?: number;
    date?: string;
  }[];
