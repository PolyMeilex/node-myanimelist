import ForumPost from "./forumPost";

/** src: https://github.com/jikan-me/jikan/blob/master/src/Model/Forum/ForumTopic.php */
export default interface ForumTopic {
  author_name: string;
  author_url: string;
  date_posted: Date;
  last_post: ForumPost;
  replies: number;
  title: string;
  topic_id: number;
  url: string;
}