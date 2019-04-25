export default function (name: string): Promise<{}>;
export interface ListsOBJ {
    myinfo: {
        user_id: string;
        user_name: string;
        user_watching: string;
        user_completed: string;
        user_onhold: string;
        user_dropped: string;
        user_plantowatch: string;
        user_days_spent_watching: string;
    };
    anime: [{
        series_animedb_id: string;
        series_title: string;
        series_synonyms: string;
        series_type: string;
        series_episodes: string;
        series_status: string;
        series_start: string;
        series_end: string;
        series_image: string;
        my_id: string;
        my_watched_episodes: string;
        my_start_date: string;
        my_finish_date: string;
        my_score: string;
        my_status: string;
        my_rewatching: string;
        my_rewatching_ep: string;
        my_last_updated: string;
        my_tags: string;
    }];
}
