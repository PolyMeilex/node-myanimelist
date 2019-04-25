declare type request = '' | 'profile' | 'history' | 'friends' | 'animelist' | 'mangalist';
/**
 * ### User related data
 * @param username Username on MyAnimeList.
 * @param request Request types: 'profile','history','friends','animelist','mangalist'.
 */
export default function (username: string, request?: request, argument?: any, argument2?: any): Promise<{}>;
export {};
