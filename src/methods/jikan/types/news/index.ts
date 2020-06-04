/** src: ? */
export interface News {
  articles: NewsListItem[];

  request_cache_expiry: number;
  request_cached: boolean;
  request_hash: string;
}
export default News;

/** src: https://github.com/jikan-me/jikan/blob/master/src/Model/News/NewsListItem.php */
export interface NewsListItem {
  url: string;
  title: string;
  date: Date;

  author_name: string;
  author_url: string;
  forum_url: string;

  image_url: string | null;

  comments: number;
  intro: string;
}
