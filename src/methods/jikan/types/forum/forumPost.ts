/** src: https://github.com/jikan-me/jikan/blob/master/src/Model/Forum/ForumPost.php */
export interface ForumPost {
  url: string;
  author_name: string;
  author_url: string;
  date_posted: Date | null;
}
