declare type request = '' | 'characters' | 'news' | 'pictures' | 'stats' | 'forum' | 'moreinfo' | 'reviews' | 'recommendations' | 'userupdates';
/**
 * ### A single manga object with all its details
 * @param id Id on MyAnimeList.
 * @param request Request types: 'characters','news','pictures','stats','forum','moreinfo','reviews','recommendations','userupdates'.
 * @param parameter Page number.
 */
export default function (id: number, request?: request, parameter?: number | string): Promise<{}>;
export {};
