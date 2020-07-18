export interface ForumCategory {
  title: string;
  boards: ForumBoard[];
}

export interface ForumBoard {
  id: number;
  title: string;
  description: string;
  subboards: ForumSubboard[];
}

export interface ForumSubboard {
  id: number;
  title: string;
}

// Detail

export interface ForumTopicData {
  title: string;
  posts: ForumTopicPost[];
  poll: ForumTopicPoll | null;
}

export interface ForumTopicPost {
  id: number;
  number: number;
  created_at: string;
  created_by: ForumTopicPostCreatedBy;
  body: string;
  signature: string;
}

export interface ForumTopicPostCreatedBy {
  id: number;
  name: string;
  forum_avator: string;
}

export interface ForumTopicPoll {
  id: number;
  question: string;
  close: boolean;
  options: ForumTopicPollOption[];
}

export interface ForumTopicPollOption {
  id: number;
  text: string;
  votes: number;
}

// Topics

export interface ForumTopicsData {
  id: number;
  title: string;
  created_at: string;
  created_by: ForumTopicsCreatedBy;
  number_of_posts: number;
  last_post_created_at: string;
  last_post_created_by: ForumTopicsCreatedBy;
  is_locked: boolean;
}

export interface ForumTopicsCreatedBy {
  id: number;
  name: string;
}
